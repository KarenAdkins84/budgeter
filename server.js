const express = require('express');
const cors = require('cors');
require('./server/config/dbConnect');
const usersRoutes = require('./server/routes/users/usersRoutes');
const accountsRoutes = require('./server/routes/accounts/accountsRoutes');
const transactionsRoutes = require('./server/routes/transactions/transactionsRoutes');
const globalErrHandler = require('./server/middlewares/globalErrHandler');

const app = express();

//middlewares
//parse incoming data
app.use(express.json());
//cors middleware
app.use(cors());
//routes

//users routes
app.use('/api/v1/users', usersRoutes);

//account routes

app.use('/api/v1/accounts', accountsRoutes)

//transactions routes

app.use('/api/v1/transactions', transactionsRoutes)

//error handlers
app.use(globalErrHandler);

//listen to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
