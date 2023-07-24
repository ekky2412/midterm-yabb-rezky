import express from "express";

import {addComment} from "../controllers/rest/comments.js";

const router = express.Router();

// router.get("/video/thumbnail", getVideoThumbnail)
// router.get("/products", getProducts)
// router.get("/comments", getComments)
router.post("/comments/:id", addComment)

export default router