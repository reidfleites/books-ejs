import CommentsModel from '../models/comments.js';
 
export const getAllComments = async () => {

    const comments = await CommentsModel.find({})
        .populate("person")
        
    return comments;
}