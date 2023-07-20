const express = require('express');
const { createAcctCtrl, fetchAcctCtrl, deleteAcctCtrl, updateAcctCtrl, fetchAllAcctCtrl } = require('../../controllers/accounts/accountsController');
const isLoggedIn = require('../../middlewares/isLoggedIn');

const accountsRoutes = express.Router();

//POST/api/v1/accounts
accountsRoutes.post('/', isLoggedIn, createAcctCtrl);

//GET/api/v1/accounts/:id
accountsRoutes.get('/:id', fetchAcctCtrl);

//DELETE/api/v1/accounts/:id
accountsRoutes.delete('/:id', deleteAcctCtrl);

//PUT/api/v1/accounts/:id
accountsRoutes.put('/:id', updateAcctCtrl);

//GET/api/v1/accounts
accountsRoutes.get('/', fetchAllAcctCtrl);




module.exports = accountsRoutes;
