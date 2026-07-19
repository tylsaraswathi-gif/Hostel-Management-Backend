import Student from "../models/Student.js";


// Get All Students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      success: true,
      students
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



// Get Student By ID
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(student);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



// Add Student
export const addStudent = async (req, res) => {
  try {

    const student = await Student.create(req.body);

    res.status(201).json({
      message: "Student added successfully",
      student
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};



// Update Student
export const updateStudent = async (req, res) => {
  try {

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new:true }
    );


    if(!student){
      return res.status(404).json({
        message:"Student not found"
      });
    }


    res.status(200).json({
      message:"Student updated successfully",
      student
    });


  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};




// Delete Student
export const deleteStudent = async (req,res)=>{
  try{

    const student = await Student.findByIdAndDelete(req.params.id);


    if(!student){
      return res.status(404).json({
        message:"Student not found"
      });
    }


    res.status(200).json({
      message:"Student deleted successfully"
    });


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};




// Student Login  ✅ ADDED
export const loginStudent = async (req,res)=>{

  try{

    const {email,password}=req.body;


    const student = await Student.findOne({email});


    if(!student){

      return res.status(404).json({
        message:"Student not found"
      });

    }


    if(student.password !== password){

      return res.status(401).json({
        message:"Invalid password"
      });

    }


    res.status(200).json({
      message:"Login successful",
      student
    });


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};