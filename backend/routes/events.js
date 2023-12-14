const express = require('express');
const {getAllEvents , getEvent , addEvent , updateEvent , deleteEvent} = require('../controllers/eventControllers')

const router = express.Router();


router.get('/events',getAllEvents)
router.get('/events/:id',getEvent)
router.post('/events',addEvent)
router.patch('/events/:id',updateEvent)
router.delete('/events/:id',deleteEvent)




module.exports = router
