import mongoose from 'mongoose';
 

 
const personsSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
}, { collection: "persons" });
const PersonsModel = mongoose.model("Person", personsSchema);
 
export default PersonsModel;