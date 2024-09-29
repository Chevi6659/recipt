const express = require('express');
const { createNewInvoice, getAllInvoice, getInvoiceBetweenDays, getInvoiceByCustName, getInvoiceByYear, getInvoiceByMonth } = require('../modules/invoice');
const router = express.Router();

router.post('/createNewInvoice', express.json(), async (req, res) => {
    try {
        const receipt = req.body;
        const invoice = await createNewInvoice(receipt);
        res.status(200).json(invoice);
    }
    catch (error) {
        if (error.type) {
            res.status(error.type).send(error.message);
        }
        else {
            res.status(500).send(error.message);
        }
    }
})

router.get('/getAllInvoice', async (req, res) => {
    try {
        const invoice = await getAllInvoice();
        res.status(200).send(invoice);
    }
    catch (error) {
        if (error.type) {
            res.status(error.type).send(error.message);
        }
        else {
            res.status(500).send(error.message);
        }
    }
})

router.get('/getInvoiceByCustName/:name', async (req, res) => {
    try {
        const { name } = req.params;
        console.log({ name });
        const invoice = await getInvoiceByCustName(name);
        res.status(200).send(invoice);
    }
    catch (error) {
        if (error.type) {
            res.status(error.type).send(error.message);
        }
        else {
            res.status(500).send(error.message);
        }
    }
})

router.get('/getInvoiceBetweenDays/:startDate/:endDate', async (req, res) => {
    try {
        const { startDate, endDate } = req.params;
        console.log(startDate, endDate);
        const invoice = await getInvoiceBetweenDays(startDate, endDate);
        res.status(200).send(invoice);
    }
    catch (error) {
        if (error.type) {
            res.status(error.type).send(error.message);
        }
        else {
            res.status(500).send(error.message);
        }
    }
})

router.get('/getInvoiceByMonth/:month', async (req, res) => {
    try {
        const { month } = req.params;
        const invoice = await getInvoiceByMonth(month);
        res.status(200).send(invoice);
    }
    catch (error) {
        if (error.type) {
            res.status(error.type).send(error.message);
        }
        else {
            res.status(500).send(error.message);
        }
    }
})

router.get('/getInvoiceByYear/:year', async (req, res) => {
    try {
        const { year } = req.params;
        const invoice = await getInvoiceByYear(year);
        res.status(200).send(invoice);
    }
    catch (error) {
        if (error.type) {
            res.status(error.type).send(error.message);
        }
        else {
            res.status(500).send(error.message);
        }
    }
})

module.exports = router;