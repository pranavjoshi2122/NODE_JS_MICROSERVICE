const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    const token = req.header("Authorization") ? req.header("Authorization").split(" ")[1] : '';
    //   const token1 = req.header("Authorization");
    console.log("token : ", token);
    if (!token)
      return res.status(401).send("Access Denied. No token provided.");
    try {
      const decoded = jwt.verify(token, "userDetails");
      req.user = decoded;
      next();
    } catch (ex) {
      res.status(400).send("Invalid token.");
    }
  },
};
