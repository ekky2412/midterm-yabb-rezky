import Comment from "./models/comment.js";

export const getCommentsByVideoIdRepo = async (videoId) => {
  try {
    const comments = await Comment.find({ videoId });
    return comments;
  } catch (err) {
    return err;
  }
};

export const addCommentByRepo = async (id, username, comment) => {
  try {
    const commentToSave = new Comment({
      username,
      comment,
      videoID: id,
    });

    const saveComment = await commentToSave.save();

    return saveComment;
  } catch (err) {
    return err;
  }
};
