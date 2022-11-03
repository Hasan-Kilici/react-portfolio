const express = require('express');
const reactViews = require('express-react-views');

const app = express();

app.use('/public', express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

//Routers
//Get
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/github', (req, res) => {
  res.render('github');
});

app.get('/projects', (req, res) => {
  res.render('index');
})

app.listen(3000, () => {
  console.log(`server is up!`);
});
