const Invoice = require('../models/invoice');

exports.getInvoicesByMonth = async (req, res) => {
  try {
    const { month, page } = req.query;
    const limit = 10;
    const offset = (page - 1) * limit;

    const invoices = await Invoice.findAndCountAll({
      where: { month },
      order: [['roomNumber', 'ASC']],
      limit,
      offset,
    });

    res.json({ month, page, invoices });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server error' });
  }
};