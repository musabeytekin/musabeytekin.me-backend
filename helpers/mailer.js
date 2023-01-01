var nodeoutlook = require("nodejs-nodemailer-outlook");
const sendMail = (to, content, subject) => {
  nodeoutlook.sendEmail({
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASSWORD
    },
    from: process.env.MAIL_ADDRESS,
    to,
    subject,
    html: `<b>${content}</b>`,
    text: "This is text version!",
    replyTo: "musabeytekin09@gmail.com",
 
    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i)
  });
};

module.exports = sendMail;
