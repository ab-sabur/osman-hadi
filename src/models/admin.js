const { Schema, mongoose } = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter email."],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [6, "Password should be greater than 6 characters"],
    select: false,
  },
});

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcryptjs.hash(this.password, 10);
});

adminSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

adminSchema.methods.comparedPassword = async function (pass) {
  return await bcryptjs.compare(pass, this.password);
};

module.exports = mongoose.models.Admin || mongoose.model("Admin", adminSchema);
