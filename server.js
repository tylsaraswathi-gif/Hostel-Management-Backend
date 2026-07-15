import express from "express";

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// -----------------------------
// Temporary Data
// -----------------------------

let students = [
  {
    id: 101,
    studentName: "Yamini",
    branch: "Data Science",
    cgpa: 9.5,
    roomNo: 201,
    hostel: "Girls Hostel"
  },
  {
    id: 102,
    studentName: "Mouni",
    branch: "AI",
    cgpa: 9.0,
    roomNo: 202,
    hostel: "Girls Hostel"
  }
];

let rooms = [
  {
    roomNo: 201,
    floor: 2,
    capacity: 4,
    occupied: 2
  },
  {
    roomNo: 202,
    floor: 2,
    capacity: 4,
    occupied: 3
  }
];

let complaints = [
  {
    id: 1,
    student: "Yamini",
    issue: "Fan not working",
    status: "Pending"
  }
];

// -----------------------------
// Home Routes
// -----------------------------

app.get("/", (req, res) => {
  res.send("Welcome to Hostel Management Backend");
});

app.get("/home", (req, res) => {
  res.send("Hostel Management System API is Running...");
});

// -----------------------------
// Student Routes
// -----------------------------

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find(
    (student) => student.id === id
  );

  if (!student) {
    return res.status(404).json({
      message: "Student Not Found"
    });
  }

  res.json(student);
});

app.post("/students", (req, res) => {

  const student = req.body;

  students.push(student);

  console.log(student);

  res.status(201).json({
    message: "Student Added Successfully"
  });

});

// -----------------------------
// Room Routes
// -----------------------------

app.get("/rooms", (req, res) => {
  res.json(rooms);
});

app.post("/rooms", (req, res) => {

  const room = req.body;

  rooms.push(room);

  console.log(room);

  res.status(201).json({
    message: "Room Added Successfully"
  });

});

// -----------------------------
// Complaint Routes
// -----------------------------

app.get("/complaints", (req, res) => {
  res.json(complaints);
});

app.post("/complaints", (req, res) => {

  const complaint = req.body;

  complaints.push(complaint);

  console.log(complaint);

  res.status(201).json({
    message: "Complaint Registered Successfully"
  });

});

// -----------------------------
// Start Server
// -----------------------------

app.listen(PORT, () => {

  console.log(`Server Started Successfully`);

  console.log(`http://localhost:${PORT}`);

});