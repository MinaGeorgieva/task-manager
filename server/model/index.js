import mongoose from 'mongoose';

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

export const TaskSchema = new Schema({
    id:{
        type:ObjectId
    },
    title:{
        type: String,
        required: 'Title is requiered'
    },
    completed:{
        type: Boolean,
        required: 'Status is required'
    },
    lastModified:{
        type: Date,
        default: Date.now
    }

});