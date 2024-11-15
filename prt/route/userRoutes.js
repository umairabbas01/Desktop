// Map the routes to the CRUD functions in the controller.


// routes/user.routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/users', userController.createUser);          // Create
router.get('/users', userController.getAllUsers);          // Read all
router.get('/users/:id', userController.getUserById);      // Read one
router.put('/users/:id', userController.updateUser);       // Update
router.delete('/users/:id', userController.deleteUser);    // Delete

module.exports = router;
