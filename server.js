import express from 'express';
import { posts } from './posts.js';
const app = express();

app.get('/post', (_req, res) => {
  res.status(200).json({ success: true, posts: posts });
});

app.listen(8000, () => {
  console.log('Server running at port 8000');
});
