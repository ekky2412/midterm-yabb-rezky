import mongoose from "mongoose"

const commentSchema = mongoose.Schema({
    username: {
        required: true,
        type: "String"
    },
    comment: {
        required: true,
        type: "String"
    },
    timestamp: {
        // required: true,
        type: Date,
        default: Date.now
    },
    videoId: {
        required: true,
        type: "String"
    }
}, {
    versionKey: false
})

export default mongoose.model('Comment', commentSchema)