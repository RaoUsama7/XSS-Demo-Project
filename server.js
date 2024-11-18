const express = require("express");
const session = require('express-session');
const fs = require('fs');
const path = require('path');

const port = 3000;
const app = express();

let reviews = {
  index: [],
  horror: [],
  comedy: [],
  drama: [],
  action: []
};

app.use(express.static('public'));
app.use(session({
  secret: 'my-secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: false
  }
}));

app.get('/', function (req, res) {
  if (req.query.newReview) reviews.index.push(req.query.newReview);
  const formattedReviews = reviews.index.map((review) => `<dt>User</dt><dd>${review}</dd>`).join(' ');
  const template = fs.readFileSync('./templates/index.html', 'utf8');
  const view = template.replace('$reviews$', formattedReviews);
  res.send(view);
});

app.get('/horror.html', function (req, res) {
  if (req.query.newReview) reviews.horror.push(req.query.newReview);
  const formattedReviews = reviews.horror.map((review) => `<dt>User</dt><dd>${review}</dd>`).join(' ');
  const template = fs.readFileSync('./templates/horror.html', 'utf8');
  const view = template.replace('$reviews$', formattedReviews);
  res.send(view);
});

app.get('/comedy.html', function (req, res) {
  if (req.query.newReview) reviews.comedy.push(req.query.newReview);
  const formattedReviews = reviews.comedy.map((review) => `<dt>User</dt><dd>${review}</dd>`).join(' ');
  const template = fs.readFileSync('./templates/comedy.html', 'utf8');
  const view = template.replace('$reviews$', formattedReviews);
  res.send(view);
});

app.get('/drama.html', function (req, res) {
  if (req.query.newReview) reviews.drama.push(req.query.newReview);
  const formattedReviews = reviews.drama.map((review) => `<dt>User</dt><dd>${review}</dd>`).join(' ');
  const template = fs.readFileSync('./templates/drama.html', 'utf8');
  const view = template.replace('$reviews$', formattedReviews);
  res.send(view);
});

app.get('/action.html', function (req, res) {
  if (req.query.newReview) reviews.action.push(req.query.newReview);
  const formattedReviews = reviews.action.map((review) => `<dt>User</dt><dd>${review}</dd>`).join(' ');
  const template = fs.readFileSync('./templates/action.html', 'utf8');
  const view = template.replace('$reviews$', formattedReviews);
  res.send(view);
});

app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));
