const Account = require("../../model/Account");
const Transaction = require("../../model/Transaction");
const User = require("../../model/User");
const { AppErr } = require("../../utils/appErr");


//create
const createTransCtrl = async(req, res, next)=>{
    const { name, amount, notes, transactionType, account, category } = req.body;
    try {
        //find user
        const userFound = await User.findById(req.user)
        if (!userFound) return next(new AppErr('User not found', 404));
        //find account
        const accountFound = await Account.findById(account);
        if (!accountFound) return next(new AppErr('Account not found', 404));
        //create transaction
        const transaction = await Transaction.create({
            amount,
            notes,
            account,
            transactionType,
            category,
            name,
            createdBy: req.user,
        });
        //push transaction into the account
        accountFound.transactions.push(transaction._id);
        //resave the acount
        await accountFound.save();
        res.json({
            status: 'success',
            data: transaction,
        });
    } catch (error) {
        res.json(error);
    }
};

//get all transactions
const fetchAllTransCtrl = async(req, res, next)=>{
    try {
        const trans = await Transaction.find();
        res.status(200).json({
            status: 'success',
            data: trans,
        });
    } catch (error) {
        next(new AppErr(error.message, 500));
    }
};

//get single transaction by id
const fetchSingleTransCtrl = async(req, res, next)=>{
    try {
        const { id } = req.params;
        const tran = await Transaction.findById(id);
        res.json({
            status: 'success',
            data: tran,
        });
    } catch (error) {
        next(new AppErr(error.message, 500));
    }
};

//delete
const deleteTransCtrl = async(req, res, next)=>{
    try {
        const { id } = req.params;
        await Transaction.findByIdAndDelete(id);
        res.json({
            status: 'success',
            data: null,
        });
    } catch (error) {
        next(new AppErr(error.message, 500));
    }
};

//update
const updateTransCtrl = async(req, res, next)=>{
    try {
        const { id } = req.params;
        const tran = await Transaction.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        })
        res.json({
            status: 'success',
            data: tran,
        });
    } catch (error) {
        next(new AppErr(error.message, 500));
    }
};


module.exports = {
    createTransCtrl,
    fetchAllTransCtrl,
    fetchSingleTransCtrl,
    deleteTransCtrl,
    updateTransCtrl,
};