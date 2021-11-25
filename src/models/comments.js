import mongoose from 'mongoose';
import PersonsModel from '../models/persons.js';

 
const Schema = mongoose.Schema;
 
const commentssSchema = mongoose.Schema({
    message: String,
    date: Date,
    person:{type:Schema.ObjectId,ref:"Person"}
   
    
}, { collection: "comments" });
const CommentssModel = mongoose.model("Comments", commentssSchema);
 
export default CommentssModel;