import db from "@/app/lib/database";

const getNotes = async (req, res) => {
  try {
    const collection = db.collection("notes");

    const records = await collection.find({}).toArray();

    res.status(200).json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving records" });
  }
};

export default getNotes;
