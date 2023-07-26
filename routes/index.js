import express from "express";

import {addComment, getComments} from "../controllers/rest/comments.js";
import { getProducts } from "../controllers/rest/products.js";

const router = express.Router();

// router.get("/video/thumbnail", getVideoThumbnail)
router.get("/products/:id", getProducts)
router.get("/comments/:id", getComments)
router.post("/comments/:id", addComment)

export default router