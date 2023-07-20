const express = require('express');
const { registerUserCtrl, loginUserCtrl, userProfileCtrl, deleteUserCtrl, updateUserCtrl } = require('../../controllers/users/usersController');
const isLoggedIn = require('../../middlewares/isLoggedIn');

const usersRoutes = express.Router();

//POST/api/v1/users/register
usersRoutes.post('/register', registerUserCtrl);

//POST/api/v1/users/login
usersRoutes.post('/login', loginUserCtrl);

//GET/api/v1/users/profile
usersRoutes.get('/profile', isLoggedIn, userProfileCtrl);

//DELETE/api/v1/users/
usersRoutes.delete('/', isLoggedIn, deleteUserCtrl);

//PUT/api/v1/users/
usersRoutes.put('/', isLoggedIn, updateUserCtrl);




module.exports = usersRoutes;