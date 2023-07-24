// import Comment from "../../../repositories/models/comment.js"
import Comment from "../../repositories/models/comment.js"

// export const getComments = (req,res) => {
    
// }

export const addComment = (req,res) => {
    const {id} = req.params

    const comment = new Comment({
        videoId: id,
        username: "ekky2412",
        comment: "mantap",
    });

    try{
        const commentToSave = comment.save()
        res.status(200).json(commentToSave);
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
    
}