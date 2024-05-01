const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// home
app.get('/', (req, res) => res.send('Home'));

// route with params
app.get('/user/:id', (req, res) => {
  res.send(`This is user ${req.params.id}`);
});

// route with query
app.get('/data', (req, res) => {
  res.send(`data query: ${JSON.stringify(req.query)}`);
});

// render raw html
app.get('/html', (req, res) => {
  res.send(`
    <h3>Show html content</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Veniam cupiditate architecto quisquam magnam, quasi totam 
    eius quia ad aperiam dolorem corporis vitae in voluptatibus 
    delectus neque sed velit numquam similique!</p>
  `);
});

// render an html file
app.get('/about', (req, res) => {
  const aboutPage = path.join(__dirname, './about.html');
  res.sendFile(aboutPage);
});

// show all routes
app.get('/routes', (req, res) => {
  res.send(`
    <h3>Show routes</h3>
    <ul>
      <li><a href="/about">about page</a></li>  
      <li><a href="/user/6">show user 6</a></li>  
      <li><a href="/data?name=john&age=29">show query</a></li>  
      <li><a href="/html">raw html</a></li> 
    </ul>
`);
});

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
