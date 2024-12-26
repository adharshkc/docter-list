const doctor = require("../models/Doctor");

const getAllDoctors = async () => {
  try {
    const doctors = await doctor.find();
    return doctors;
  } catch (error) {
    console.log(error);
  }
};

const addNewDoctor = async (
  name,
  age,
  specialization,
  qualification,
  mobile,
  register
) => {
  try {
    const newDoctor = await doctor.create({
      name: name,
      age: age,
      specialization: specialization,
      qualification: qualification,
      mobile: mobile,
      registerNumber: register,
    });
    return newDoctor;
  } catch (error) {
    console.log(error);
  }
};

const findOneDoctor = async (id) => {
  try {
    const result = await doctor.findOne({_id:id});
    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateDoctor = async( id, name,
    age,
    specialization,
    qualification,
    mobile,
    register)=>{
        try {
            const filter = { _id: id };
            const updateData = {
                name: name,
                age: age,
                specialization: specialization,
                qualification: qualification,
                mobile: mobile,
                registerNumber: register,
            };
            const newDoctor = await doctor.updateOne(filter, { $set: updateData });
            return newDoctor;
          } catch (error) {
            console.log(error);
          }
    }


const deleteDoctor = async(id)=>{
    try {
        const result = await doctor.deleteOne({_id:id})
        return result
    } catch (error) {
        console.log(error)
    }
}
module.exports = { getAllDoctors, addNewDoctor, findOneDoctor, updateDoctor, deleteDoctor };
