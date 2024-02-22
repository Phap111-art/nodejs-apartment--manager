const express = require('express');
const invoiceController = require('../controllers/invoiceController');

const router = express.Router();

router.get('/invoices', fileController.getInvoicesByMonth);

module.exports = router;