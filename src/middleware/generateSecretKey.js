const crypto = require('crypto');

// Generate a random 256-bit (32-byte) secret key
const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);

//test jwt token


const jwtToken = require('./jwtToken')

data = {
    username: 'brianrempas',
    role: 'admin'
}
const token = jwtToken.createToken(data, process.env.SECRET_KEY); // Use the createToken function

console.log('token: ' + token);

