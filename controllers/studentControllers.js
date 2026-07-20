import Student from "../models/Student.js";


// =========================
// GET ALL STUDENTS
// =========================
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      success: true,
      students
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



// =========================
// GET STUDENT BY ID
// =========================
export const getStudentById = async (req, res) => {
  try {

    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      student
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};



// =========================
// ADD STUDENT
// =========================
export const addStudent = async (req, res) => {
  try {

    const student = await Student.create(req.body);


    res.status(201).json({
      success: true,
      message: "Student added successfully",
      student
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};



// =========================
// UPDATE STUDENT
// =========================
export const updateStudent = async (req, res) => {
  try {


    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new:true
      }
    );


    if(!student){

      return res.status(404).json({
        success:false,
        message:"Student not found"
      });

    }


    res.status(200).json({
      success:true,
      message:"Student updated successfully",
      student
    });


  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};




// =========================
// DELETE STUDENT
// =========================
export const deleteStudent = async (req,res)=>{

  try{


    const student = await Student.findByIdAndDelete(req.params.id);


    if(!student){

      return res.status(404).json({
        success:false,
        message:"Student not found"
      });

    }


    res.status(200).json({
      success:true,
      message:"Student deleted successfully"
    });


  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};




// =========================
// STUDENT LOGIN
// =========================
export const loginStudent = async(req,res)=>{

  try{


    const {email,password}=req.body;


    const student = await Student.findOne({email});


    if(!student){

      return res.status(404).json({
        success:false,
        message:"Student not found"
      });

    }



    if(student.password !== password){

      return res.status(401).json({
        success:false,
        message:"Invalid password"
      });

    }



    res.status(200).json({

      success:true,
      message:"Login successful",
      student

    });



  }catch(error){


    res.status(500).json({

      success:false,
      message:error.message

    });


  }

};