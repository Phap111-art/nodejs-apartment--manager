const express = require('express');
const invoiceRoutes = require('../nodejs-apartment--manager/app/routes/invoiceRoutes');
const fileRoutes = require('../nodejs-apartment--manager/app/routes/fileRoutes');
const config = require('../nodejs-apartment--manager/config');
const db = require('../nodejs-apartment--manager/database');

const app = express();

db.authenticate()
  .then(() => {
    console.log('conn db');
  })
  .catch((error) => {
    console.error('conn db to erorr', error);
    process.exit(1);
  });


app.use('/invoices', invoiceRoutes);
app.use('/files', fileRoutes);


app.listen(config.port, () => {
  console.log(`my port ${config.port}`);
});