const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser=require('body-parser')
const app = express();
const port = 3000;
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

 // Or use any other port number

// Configure Nodemailer with your email provider details
const transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: 'rupamkhan620@gmail.com',
    pass: `Rupam12345#`
  }
});

// Handle form submission
app.get('/',(req,res)=>{
    return res.send("I am server");
})
app.post('/sendEmail', (req, res) => {
  app.get(res.send("welcome email"))
  const { first_name, last_name,email, message } = req.body;
  console.log(message)

  const mailOptions = {
    from: '"Rupam Khan👻" <rupamkhan620@gmail.com>',
    to: 'rupamkhan550@gmail.com', // Email address where you want to receive the message
    subject: 'New Message from your Website',
    html: `<p>Name: ${first_name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error: Failed to send the email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});