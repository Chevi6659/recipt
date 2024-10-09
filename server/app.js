const express = require('express');
const cors = require('cors');
const app = express();
const customerRouter = require('./routers/customers.router');
const expensesRouter = require('./routers/expenses.router');
const invoicesRouter = require('./routers/invoice.router');
const providerRouter = require('./routers/provider.router');

app.get('/', (req, res) => {
    res.status(200).send('hello to our server');
});

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use('/customers', customerRouter);
app.use('/expenses', expensesRouter);
app.use('/invoices', invoicesRouter);
app.use('/provider', providerRouter);

app.get('/*', (req, res) => {
    res.status(400).send('error');
});

module.exports = app;