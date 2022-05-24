const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.get("/", usersController.index);

// Using Query Parameters
router.get("/search", usersController.search);

// Using POST methods
router.get("/create", usersController.getCreate);

router.post("/create", usersController.postCreate);

module.exports = router;