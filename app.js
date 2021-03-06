const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
var port = process.env.PORT || 3000;
const nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
const app = express();
app.listen(process.env.PORT || 3000 );
// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
/* app.use('/public', express.static(path.join(__dirname, 'public'))); */
app.use(express.static('public'))
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
  console.log("Server Started");
});
app.get('/treatment', (req, res) => {
  res.render('treatment');
  console.log("Server Started");
});
app.get('/blog', (req, res) => {
  res.render('blog');
  console.log("Server Started");
});
app.get('/addBlog', (req, res) => {
  res.render('addBlog');
  console.log("Server Started");
});app.get('/admin', (req, res) => {
  res.render('admin');
  console.log("Server Started");
});
app.get('/mini-treatment', (req, res) => {
  res.render('mini-treatment');
  console.log("Server Started");
});
app.get('/beauty', (req, res) => {
  res.render('beauty');
  console.log("Server Started");
});
app.get('/beauty-scr', (req, res) => {
  res.render('beauty-scr');
  console.log("Server Started");
});
app.get('/gallery-polaroid', (req, res) => {
  res.render('gallery-polaroid');
  console.log("Server Started");
});
app.get('/about-us', (req, res) => {
  res.render('about-us');
  console.log("Server Started");
});
app.get('/contacts', (req, res) => {
  res.render('contacts');
  console.log("Server Started");
});
app.get('/services', (req, res) => {
  res.render('services');
  console.log("Server Started");
});
/* 
app.post('/send', (req, res) => {
  const output = `
    <p>#LetsUpgrade Chennai</p>
    <h3>New Entry</h3>
    <ul>  
      <li>Name: ${req.body.name}  ${req.body.sec}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
      <li> Intrest : ${req.body.chk}</li>
    </ul>
   
  `;

  // create reusable transporter object using the default SMTP transport
  
  let transporter = nodemailer.createTransport({
    service: 'SendGrid',
   // host: 'smtp.sendgrid.net',
   // port:  465,
   // secure: false, // true for 465, false for other ports
   auth: {
    user: 'Viralpatel380', // generated ethereal user
    pass: 'viralpatel380'  // generated ethereal password
}
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"#LetsUpgrade, India" <contact@upgrde.tech>', // sender address
      to: 's.viralbp@itmvu.in, saikirans@itm.edu', // list of receivers
      subject: '#LetsUpgrade | New Entry', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions,(error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('world', {msg:'Email has been sent'});
  });

  }); */

//app.listen(3000, () => console.log('Server started...'));