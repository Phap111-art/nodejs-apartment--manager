const nodemailer = require('nodemailer');

exports.sendEmail = async (recipients, subject, text, csvPath) => {
  try {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'macdinhphap123@gmail.com',
          pass: '123456',
        },
      });
    const mailOptions = {
      from: 'macdinhphap123@gmail.com',
      to: recipients,
      subject,
      text,
      attachments: [
        {
          filename: 'unpaid.csv',
          path: csvPath,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
  }
};