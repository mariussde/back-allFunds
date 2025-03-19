import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import newsRoutes from './routes/news';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// funcionalidad para mantener vivo el servicio de free hosting, obviar
app.get('/ping', (req, res) => {
  res.send('pong');
});
const keepAlive = () => {
  fetch(`${process.env.BASE_URL || `http://localhost:${port}`}/ping`)
    .then(() => console.log('Service kept alive'))
    .catch(err => console.error('Keep alive failed:', err));
};

setInterval(keepAlive, 14 * 60 * 1000);

app.use('/api/news', newsRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    keepAlive();
  });
});
