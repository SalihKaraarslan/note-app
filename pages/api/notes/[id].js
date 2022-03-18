import nc from "next-connect";
import Note from "../../../models/Note";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const note = await Note.findById(req.query.id);
  await db.disconnect();
  res.send(note);
});

handler.put(async (req, res) => {
  await db.connect();
  const note = await Note.findById(req.query.id);

  note.title = req.body.title;
  note.desc = req.body.desc;
  await note.save();
  await db.disconnect();
  res.send({ message: "Note Updated Successful" });
});

handler.delete(async (req, res) => {
  await db.connect();
  const note = await Note.findById(req.query.id);

  await note.remove();
  await db.disconnect();
  res.send({ message: "Note Deleted" });
});

export default handler;
