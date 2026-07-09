import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/auth/signup', (req, res) => {
  res.send('sign up route');
});

app.get('/api/auth/login', (req, res) => {
  res.send('login route');
});

app.get('/api/auth/logout', (req, res) => {
  res.send('logout route');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});