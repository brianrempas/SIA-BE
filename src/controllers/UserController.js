const User = require("../models/User");
const Auth = require("../middleware/jwtToken");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  await User.findAll({
    attributes: {
      exclude: ["password"],
    },
  })
    .then((data) => {
      if (!data.length) {
        return res.status(201).json({
          message: "data is empty",
          result: data,
        });
      }

      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(400).json({
        message: "error when get all data: " + error,
      });
    });
};
const createUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  // username password role mixId
  const data = req.body;
  let userProperties = {
    username: data.username,
    password: await bcrypt.hash(data.password, salt),
    role: data.role,
    student_id: null,
    lecture_id: null,
  };

  switch (data.role) {
    case "student":
      userProperties.student_id = data.mixId;
      console.log("student " + data.mixId);
      console.log(userProperties);
      break;
    case "lecture":
      userProperties.lecture_id = data.mixId;
      console.log("lecture " + data.mixId);
      console.log(userProperties);
      break;
    case "admin":
      break;
    default:
      return res.status(400).json({ error: "Invalid or missing role" });
  }
  await User.create(userProperties)
    .then((data) => {
      res.status(201).json({
        username: data.username,
        role: data.role,
      });
    })
    .catch(error => {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({ error: 'Username is already in use' });
        } else {
            res.status(400).json({ message: 'Error when creating data: ' + error });
        }
    })
}

const updateUser = async (req, res) => {
  const data = req.body.data;
  switch (data.role) {
    case "student":
      data.student_id = data.mixId;
      console.log("student " + data.mixId);
      console.log(data);
      break;
    case "lecture":
      data.lecture_id = data.mixId;
      console.log("lecture " + data.mixId);
      console.log(data);
      break;
    case "admin":
      break;
    default:
      return res.status(400).json({ error: "Invalid or missing role" });
  }

  await User.update(
    {
      username: data.username,
      password: data.password,
      role: data.role,
      student_id: data.student_id,
      lecture_id: data.lecture_id,
    },
    {
      where: {
        user_id: data.userId,
      },
    }
  )
    .then((data) => {
      if (data[0] === 0) {
        return res.status(400).json({
          message: "account not found",
          result: data,
        });
      }

      res.status(201).json({
        result: data[0],
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "error when updating data: " + error,
      });
    });
};

const deleteUser = async (req, res) => {
  await User.destroy({
    where: {
      user_id: req.params.id,
    },
  })
    .then((data) => {
      res.status(204).json({
        result: data,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "error when deleting data: " + error,
      });
    });
};

const logInUser = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({ where: { username } });

  if (!user) {
    return res.status(400).json({ message: "username or password is wrong" });
  }

  try {
    dataRes = {
      username: user.username,
      role: user.role,
      student_id: user.student_id,
      lecture_id: user.lecture_id,
    };
    // const passwordMatch = await password === user.password;
    const passwordMatch = await password === user.password
    const secretKey = process.env.SECRET_KEY;
    console.log(secretKey);
    console.log(password + " " + user.password);
    console.log(passwordMatch);
    if (passwordMatch) {
      const JWTtoken = Auth.createToken(dataRes, secretKey);
      console.log("logged in: " + user.username);
      res.status(201).json({
        message: "Login successful",
        username: user.username,
        token: JWTtoken,
      });
    } else {
      return res.status(400).json({ message: "Incorrect password" });
    }
  } catch (error) {
    return res.status(400).json({ message: "An error occurred: " + error });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  logInUser,
};
