const { AppErr } = require("../utils/appErr");
const verifyToken = require("../utils/verifyToken")
const getTokenFromHeader = require("./getTokenFromHeader")

const isLoggedIn = (req, res, next)=> {
    //get token from req header
    const token = getTokenFromHeader(req)
    //verify
    const decodedUser = verifyToken(token)
    //save the user into req obj
    req.user = decodedUser.id
    if(!decodedUser){
    return next(new AppErr('Invalid/Expired token, please login again', 401));
    }
    next();
};

module.exports = isLoggedIn;