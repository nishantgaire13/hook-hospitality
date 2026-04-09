const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Hook Hospitality - Warm Rustic Elegance', page: 'home' });
});

app.get('/menu', (req, res) => {
  res.render('menu', { title: 'Menu - Hook Hospitality', page: 'menu' });
});

app.get('/events', (req, res) => {
  res.render('events', { title: 'Events & Live Music - Hook Hospitality', page: 'events' });
});

app.get('/booking', (req, res) => {
  res.render('booking', { title: 'Reserve a Table - Hook Hospitality', page: 'booking' });
});

app.get('/gallery', (req, res) => {
  res.render('gallery', { title: 'Gallery - Hook Hospitality', page: 'gallery' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact - Hook Hospitality', page: 'contact' });
});

// Booking form submission
app.post('/booking', (req, res) => {
  const { date, time, guests, name, email, phone } = req.body;
  console.log('New booking request:', { date, time, guests, name, email, phone });
  res.render('booking', {
    title: 'Reserve a Table - Hook Hospitality',
    page: 'booking',
    success: 'Your reservation request has been received! We will confirm shortly.'
  });
});

app.listen(PORT, () => {
  console.log(`Hook Hospitality is running at http://localhost:${PORT}`);
});
