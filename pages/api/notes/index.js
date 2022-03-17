import nc from "next-connect";
import db from "../../../utils/db";
import Note from "../../../models/Note";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const notes = await Note.find({});
  await db.disconnect();
  res.send(notes);
});

export default handler;
