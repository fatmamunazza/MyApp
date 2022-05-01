const nodemailer = require("nodemailer");
import { alertService } from "services";

export default verification;

async function verification(req, res) {
  var smtpTransport = await nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "munazzafatma98765@gmail.com",
      pass: "gmailpassword",
    },
  });

  // send mail with defined transport object
  let info = await smtpTransport
    .sendMail({
      from: "munazzafatma98765@gmail.com",
      to: req.body.username,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
      <h2>Hello ${req.body.firstName}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:3000/account/confirmation/${req.body.id}> Click here</a>
        </div>`,
    })
    .catch((err) => console.log(err));
  console.log("Message sent: %s", info.messageId);
  return res.status(200).json({});
}
