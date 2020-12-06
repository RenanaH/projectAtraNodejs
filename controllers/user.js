const User = require('../models/user')
//כניסה עם שם משתמש וססמא
const login = async (req, res) => {
    let user = req.body;
    try {
        await User.findOne(user);
        if (user == null)
            res.status(400).json("you are not register")
        else
            res.status(200).json("welcome");
    } catch (error) {
        res.status(400).json(error)
    }
}
//הרשמה
const register = async (req, res) => {
    let user = new User(req.body);
    await user.save((err, user) => {
        if (err)
            res.status(400).json(err)
        res.status(200).json("welcome");
    })
}
module.exports = { login, register }