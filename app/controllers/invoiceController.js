const csvUtils = require('../utils/csvUtils');
const User = require('../models/user');

exports.uploadFile = async (req, res) => {
  try {
    const { path } = req.file;
    const users = await csvUtils.parseCSV(path, ['username', 'email']);

    await User.bulkCreate(users);

    res.json({ message: ' uploaded success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server error' });
  }
};