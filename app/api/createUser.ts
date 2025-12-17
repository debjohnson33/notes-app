import db from "@/app/lib/database";

const createUser = async (req, res) => {
  try {
    // Get the user from the request body
    const { username, email, password } = req.body;
    const collection = db.collection("users");

    // Create a new user in the database
    const user = await collection.insertOne({
      id: new Date().getTime(),
      username,
      email,
      password,
      notes: [],
    });
    if (user) {
      console.log("User created successfully");
      // Return the user object
      res.status(201).json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user record", error });
  }
};

export default createUser;
