
const Volunteer = require('../models/volunteerModel')

const getAllVolunteers = async (req , res)=>{
    const volunteers = await Volunteer.find({}).sort({createdAt : -1})
    res.json(volunteers)
    
}

const getVolunteer = async (req , res)=>{
    const {id}=req.body

}

const addVolunteer = async (req , res)=>{
    const {name , rollNo , email , attendance}= req.body
    try{

        const volunteer = await Volunteer.create({name, rollNo, email,attendance})
        res.status(200).json(volunteer)
    }catch(err){
        res.status(400).json({error: err.message})
    }

}

const updateVolunteer = async (req , res)=>{}

const deleteVolunteer = async (req , res)=>{}

module.exports ={getAllVolunteers, addVolunteer,updateVolunteer,deleteVolunteer,getVolunteer}