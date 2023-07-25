import Comment from "./models/comment.js"

export const getCommentsByVideoIdRepo = async (videoId) => {
    try{
        const comments = await Comment.find({videoId});
        return comments;
    } catch(err) {
        return err;
    }
}