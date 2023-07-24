const express = require("express");

const router = express.Router();


router.get("/video/thumbnail", getVideoThumbnail)
router.get("/products", getProducts)
router.get("/comments", getComments)
router.post("/comments", addComment)

export default router;