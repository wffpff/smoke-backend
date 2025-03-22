import express from 'express';
import cors from 'cors';
import imageRoute from './generate-image.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/generate-image', imageRoute);

app.listen(3001, () => {
  console.log('Server running on port 3001');
}); 
