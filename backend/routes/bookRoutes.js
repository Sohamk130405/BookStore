const express = require("express");
const { getBooks, createBook, getBook, updateBook, deleteBook} = require("../controllers/bookController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", getBooks);
router.post("/", auth, createBook);
router.get("/:id", getBook);
router.put("/:id", auth, updateBook);
router.delete("/:id", auth, deleteBook);


module.exports = router;
