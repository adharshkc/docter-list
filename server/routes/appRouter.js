const express = require('express')
const { adminLogin, addDoctor, editDoctor, doctorDelete } = require('../controllers/admin')
const { getDoctors, getSingleDoctor } = require('../controllers/user')


const router = express.Router()



router.post("/login", adminLogin)
router.get('/doctors', getDoctors)
router.post('/doctor', addDoctor)
router.get('/doctor/:id', getSingleDoctor)
router.put('/doctor/', editDoctor)
router.delete('/doctor', doctorDelete)



module.exports = router