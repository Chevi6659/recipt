require('dotenv').config();

const { MongoOprations } = require('../services/mongo/mongo-operation')

const { MONGO_INVOICE_DB, MONGO_INVOICE_COLLECTION } = process.env;

const mongoOprations = new MongoOprations(MONGO_INVOICE_DB)

const createNewInvoice = async (Invoice) => {
    try {
        mongoOprations.Collection = MONGO_INVOICE_COLLECTION;
        await mongoOprations.insertItem(Invoice);
        return Invoice;
    }
    catch (error) {
        throw error;
    }
}

const getAllInvoice = async () => {
    mongoOprations.Collection = MONGO_INVOICE_COLLECTION;
    try {
        const response = await mongoOprations.getAllItems();
        return response;
    }
    catch (error) {
        throw error;
    }
}


const getInvoiceBetweenDays = async (startDate, endDate) => {
    mongoOprations.Collection = MONGO_INVOICE_COLLECTION;
    const filter = {
        'date': {
            $gte: startDate,
            $lte: endDate
        }
    };

    try {
        const response = await mongoOprations.find({ filter });
        return response;
    }
    catch (error) {
        throw error;
    }
}

const getInvoiceByCustName = async (cn) => {
    mongoOprations.Collection = MONGO_INVOICE_COLLECTION;

    try {
        const response = await mongoOprations.getAllItems();
        return response.filter(r => r.customer === cn);
    }
    catch (error) {
        throw error;
    }
}

const getInvoiceByMonth = async (month) => {
    const response = await getAllInvoice();
    const data = response.filter(Invoice => {
        const date = new Date(Invoice.date);
        const stringMonth = String(date.getMonth() + 1);
        return stringMonth === month;
    })
    return data;
}

const getInvoiceByYear = async (year) => {
    const response = await getAllInvoice();
    const data = response.filter(Invoice => {
        const date = new Date(Invoice.date);
        const stringYear = String(date.getFullYear());
        return stringYear === year;
    })
    return data;
}

module.exports = { getInvoiceByYear, getInvoiceByMonth, getInvoiceByCustName, getInvoiceBetweenDays, getAllInvoice, createNewInvoice, };
