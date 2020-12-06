var mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: { type: String },
    password: {
        type: String, validate: {
            validator: function (v) {
                return /\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid password`
        }
    }


})
module.exports = mongoose.model("user", userSchema)