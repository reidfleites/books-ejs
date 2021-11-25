import PersonsModel from '../models/persons.js';
 
export const getAllPersons = async () => {

    const persons = await PersonsModel.find({})
       
        
    return persons;
}