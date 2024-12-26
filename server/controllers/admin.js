const jwt = require('jsonwebtoken');
const { addNewDoctor, updateDoctor, deleteDoctor } = require('../helpers/doctor');

const secret = process.env.JWT_SECRET


const adminLogin = (req, res)=>{
    const {email, password} = req.body
    if(email =='admin@gmail.com' &&password=='123456'){
        const token = jwt.sign({ email }, secret, { expiresIn: '1h' });
        return res.status(200).json({ token });
    }else{
        return res.status(404).json({message:"Invalid credentials"})
    }

}


const addDoctor = async(req, res)=>{
    const {doctorData} = req.body
    
    const {name, age, specialization, qualification, mobile, registerNumber} = doctorData
 
    const response = await addNewDoctor(name, age, specialization, qualification, mobile, registerNumber)
    return res.status(200).json({doctors: response})

}

const editDoctor = async(req, res)=>{
    const {doctorData} = req.body
    const id = req.params.id
    
    const {name, age, specialization, qualification, mobile, registerNumber} = doctorData
    const response = await updateDoctor(id,name, age, specialization, qualification, mobile, registerNumber)
    return res.status(200).json({doctors: response})


}

const doctorDelete = async(req, res)=>{
    const id = req.params.id;
    const response = await deleteDoctor(id)
    return res.status(200).json({response})
}

module.exports = {adminLogin, addDoctor, editDoctor, doctorDelete}