const { Schema, mongoose } = require("mongoose");

const contactMessageSchema = new Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  subject: { type: String, trim: true, default: "" },
  message: { type: String, required: true },
  is_read: { type: Boolean, default: false },
  createDate: { type: Object },
});

module.exports =
  mongoose.models.ContactMessage || mongoose.model("ContactMessage", contactMessageSchema);