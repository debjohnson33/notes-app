import db from "@/app/lib/database";

const getNotes = async (req, res) => {
  try {
    // Get the user from the request body
    const { userId } = req.body;

    // Create a new note in the database
    const currentUser = await db.collection("users").findOne({ id: userId });
    if (currentUser) {
      const records = await currentUser.notes;
      res.status(200).json(records);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving records" });
  }
};

export default getNotes;
