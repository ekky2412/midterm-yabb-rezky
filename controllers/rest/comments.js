// import Comment from "../../../repositories/models/comment.js"
import Comment from "../../repositories/models/comment.js"

// export const getComments = (req,res) => {
    
// }

export const addComment = async (req,res) => {
    const {id} = req.params
    const {username, comment} = req.body;

    const commentToSave = new Comment({
        videoId: id,
        username,
        comment,
    });

    try{
        const commentToOutput = await commentToSave.save()
        res.status(200).json({
            message: `Comment from ${commentToOutput.username} successfully added`
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
    
}