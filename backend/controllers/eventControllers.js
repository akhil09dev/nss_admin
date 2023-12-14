const Event = require('../models/eventModel')

const getAllEvents = async (req , res )=>{
   const events = await Event.find({}).sort({createdAt:-1})
   res.status(200).json(events)
}

const getEvent =async (req , res)=>{
    


}
const addEvent = async (req , res)=>{
    const {title , desc,date,volunteers,credits} = req.body
    try{
        const event = await Event.create({title, desc, date,volunteers,credits})
        res.status(200).json(event)
    }catch (err){
        res.status(400).json({error : err.message})
    }


}

const updateEvent = async (req , res )=>{

}

const deleteEvent = async (req , res )=>{
    
}

module.exports= {getAllEvents , getEvent , addEvent , updateEvent , deleteEvent}