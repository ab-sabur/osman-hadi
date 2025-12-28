const { Schema, mongoose } = require("mongoose");

const tributeSchema = new Schema({
  name: { type: String, trim: true, required: true },
  relation: {
    type: String,
    default: "সাধারণ নাগরিক",
  },
  position: { type: String, trim: true },
  tributeType: { type: String, default: "স্মৃতিচারণ" },
  message: { type: String, required: true },
  is_approved: { type: Boolean, default: false },
  createDate: { type: Object },
});

module.exports =
  mongoose.models.Tribute || mongoose.model("Tribute", tributeSchema);
