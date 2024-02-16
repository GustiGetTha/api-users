const experss = require('express');

const userController = require('../controllers/usersController.js');

const router = experss.Router();

// CREATE - POST
router.post("/", userController.createUsers);

// READ - GET
router.get("/", userController.getAllUsers);

// UPDATE - PATCH
router.patch("/:id", userController.updateUsers);

// DELETE - DELETE
router.delete("/:id", userController.deleteUsers);

module.exports = router;