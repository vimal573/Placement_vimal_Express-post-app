import express from 'express';
import { posts } from './posts.js';
const app = express();

const isLoggedin = (req, res, next) => {
  let token;
  if (
    req.cookies?.token ||
    (req.headers?.authorization &&
      req.headers?.authorization.startsWith('Bearer'))
  ) {
    token = req.cookies?.token || req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return res.status(401).send('Unauthorized to access this route');
  }

  return next();
};

app.get('/post', isLoggedin, (_req, res) => {
  res.status(200).json({ success: true, posts: posts });
});

app.listen(8000, () => {
  console.log('Server running at port 8000');
});
