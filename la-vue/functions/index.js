const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

const mailTransport = nodemailer.createTransport({
  service: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: 'The Flash Gamer',
    pass: '$AnishFortnite2007',
  },
});

exports.sendEmailCF = functions.https.onRequest((req, res) => {
  const mailOptions = {
    from: `anishwestwindsor@gmail.com`,
    to: `myemail@domain.com`
  };

  // in case you get CORS errors you need these 2 lines of code
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'true');

  cors(req, res, () => {
    mailOptions.subject = 'Contact Form Message';
    mailOptions.html =   `
    <p>Email: ${req.body.email}</p>
    <p>Name: ${req.body.name}</p>
    <p>Message: ${req.body.message}</p>
    `;
      return mailTransport.sendMail(mailOptions)
        .then(() => {
        return res.status(200).json({success: true})
      })
        .catch((e) => {
          return res.status(400).json({err: e});
        })
  });
});