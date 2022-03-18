import nc from "next-connect";
import db from "../../../utils/db";
import Note from "../../../models/Note";
import { isAuth } from "../../../utils/auth";

const handler = nc();
handler.use(isAuth);

handler.get(async (req, res) => {
  await db.connect();
  if (req.user.isAdmin) {
    const notes = await Note.find({});
    await db.disconnect();
    res.send(notes);
  } else {
    const notes = await Note.find({ user: req.user._id });
    await db.disconnect();
    res.send(notes);
  }
});

handler.post(async (req, res) => {
  await db.connect();
  const newNote = new Note({
    ...req.body,
    user: req.user._id,
  });
  const notes = await newNote.save();
  await db.disconnect();
  res.send({ message: "Note Created", notes });
});

export default handler;
