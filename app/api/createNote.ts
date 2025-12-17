import db from "@/app/lib/database";

const createNote = async (req, res) => {
  try {
    // Get the user from the request body
    const { userId, title, content } = req.body;

    // Create a new note in the database
    const currentUser = await db.collection("users").findOne({ id: userId });
    if (currentUser) {
      const addedNote = await currentUser.updateOne(
        { id: userId },
        {
          $push: {
            notes: { id: new Date().getTime(), userId, title, content },
          },
        }
      );

      if (addedNote) {
        console.log("Note added successfully");
        // Return the note object
        res.status(201).json(addedNote);
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Error adding note", error });
  }
};
export default createNote;
