import nc from "next-connect";
import Note from "../../../models/Note";
import { isAuth } from "../../../utils/auth";
import db from "../../../utils/db";

const handler = nc();
handler.use(isAuth);

handler.get(async (req, res) => {
  await db.connect();
  const note = await Note.findById(req.query.id);
  if (note.user == req.user._id || req.user.isAdmin) {
    await db.disconnect();
    res.send(note);
  } else {
    await db.disconnect();
    res.status(401).send({ message: "You are not authorized " });
  }
});

handler.put(async (req, res) => {
  await db.connect();
  const note = await Note.findById(req.query.id);
  if (note.user == req.user._id || req.user.isAdmin) {
    note.title = req.body.title;
    note.desc = req.body.desc;
    await note.save();
    await db.disconnect();
    res.send({ message: "Note Updated Successful" });
  } else {
    await db.disconnect();
    res.status(401).send({ message: "You are not authorized " });
  }
});

handler.delete(async (req, res) => {
  await db.connect();
  const note = await Note.findById(req.query.id);
  if (note.user == req.user._id || req.user.isAdmin) {
    await note.remove();
    await db.disconnect();
    res.send({ message: "Note Deleted" });
  } else {
    await db.disconnect();
    res.status(401).send({ message: "You are not authorized " });
  }
});

export default handler;
