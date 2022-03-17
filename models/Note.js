import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      maxlength: [30, "Title cannot be more than 30 characters"],
    },
    desc: {
      type: String,
      required: true,
      maxlength: [100, "Description cannot be more than 100 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);
export default Note;
