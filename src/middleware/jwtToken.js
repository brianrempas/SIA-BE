const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config({ path: "../../.env" });

const createToken = (data, token) => {
  options = {
    expiresIn: "1h",
  };

  return jwt.sign(data, token);
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(403)
      .send({ message: "a token is required for authentication" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      jwt.verify(token, process.env.REFRESH_KEY_ADMIN, (err, payload) => {
        if (err) {
          return res.status(401).send({ message: "Invalid Token" });
        }
        req.payload = payload;
        next();
      });
    } else {
      req.payload = payload;
      next();
    }
  });
};

module.exports = {
  createToken,
  verifyToken,
};
