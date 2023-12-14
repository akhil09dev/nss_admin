const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema(
    {
       title :{
        type: String,
        required: true
       },
       desc:{
        type:String,

       },
       date :{
        type:Date,
        required: true
       },
       volunteers:{
        type:Array,
       },
       
       credits:{
        type:Number,
        required: true
       }
        
    }
)

module.exports = mongoose.model('Event',eventSchema)