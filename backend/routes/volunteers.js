const express = require('express');
const {getAllVolunteers, addVolunteer,updateVolunteer,deleteVolunteer,getVolunteer} =require('../controllers/volunteerControllers')
const router = express.Router();


router.get('/volunteers',getAllVolunteers)
router.get('/volunteers/:id',getVolunteer)
router.post('/volunteers',addVolunteer)
router.patch('/volunteers/:id',updateVolunteer)
router.delete('/volunteers/:id',deleteVolunteer)




module.exports = router

