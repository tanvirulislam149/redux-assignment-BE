var jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" })
  }
  jwt.verify(token, process.env.TOKEN, function (err, decoded) {
    if (err) {
      return res.status(403).send({ message: "Forbidden Access" })
    }
    req.decoded = decoded;
    next();
  })
}

module.exports = verifyJWT