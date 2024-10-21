const { addExpense, getExpenses, deleteExpenses } = require('../controllers/expense')
const { addIncome, getIncomes, deleteIncomes} = require('../controllers/income')

const router= require('express').Router()


router.post('/add-income', addIncome)
        .get('/get-incomes',getIncomes)
        .delete('/delete-incomes/:id',deleteIncomes)
        .post('/add-expense',addExpense)
        .get('/get-expenses',getExpenses)
        .delete('/delete-expense/:id',deleteExpenses)

module.exports = router