const users = [
  {
    id: 1,
    username: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    notes: [
      {
        id: 1,
        userId: 1,
        title: "Note 1",
        content: "This is the first note",
      },
      {
        id: 2,
        userId: 1,
        title: "Note 2",
        content: "This is the second note",
      },
      {
        id: 4,
        userId: 1,
        title: "Note 4",
        content: "This is the fourth note",
      },
    ],
  },
  {
    id: 2,
    username: "Jane Doe",
    email: "jane.doe@example.com",
    password: "password456",
    notes: [
      {
        id: 3,
        userId: 2,
        title: "Note 3",
        content: "This is the third note",
      },
    ],
  },
];

export default users;
