import nodemailer from "nodemailer";

import { apiHandler } from "helpers/api";

export default apiHandler({
  post: verification,
});

async function verification(req, res) {
  const { email, id, firstName } = req?.body;
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
      to: email,
      subject: "Please confirm your email account",
      html: `<h1>Email Confirmation</h1>
      <h2>Hello ${firstName}</h2>
        <p>Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:3000/account/confirmation/${id}> Click here</a>
        <p>Thank you for subscribing.</p>
        </div>`,
    })
    .catch((err) => console.log("verification", err));
  console.log("Message sent: %s", info.messageId);
  return res.status(200).json({});
}
