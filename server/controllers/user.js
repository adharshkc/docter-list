const { getAllDoctors, findOneDoctor } = require("../helpers/doctor")



const getDoctors = async(req, res)=>{
    const doctors = await getAllDoctors()
    return res.status(200).json({doctors: doctors})
}


const getSingleDoctor = async (req, res)=>{
    const id = req.params.id;
    const doctor = await findOneDoctor(id)
    return res.status(200).json({doctor: doctor})

}

module.exports = {getDoctors, getSingleDoctor}