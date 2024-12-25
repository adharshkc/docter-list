const express = require('express')
const { adminLogin, addDoctor, editDoctor, doctorDelete } = require('../controllers/admin')
const { getDoctors, getSingleDoctor } = require('../controllers/user')
const verifyUser = require("../middleware/verifyUser")


const router = express.Router()



router.post("/login", adminLogin)
router.get('/doctors', getDoctors)
router.post('/doctor', verifyUser,addDoctor)
router.get('/doctor/:id', getSingleDoctor)
router.put('/doctor/:id', verifyUser,editDoctor)
router.delete('/doctor/:id', verifyUser,doctorDelete)



module.exports = router