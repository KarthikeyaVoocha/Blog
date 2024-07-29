import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import blogRoutes from './routes/blogRoutes.js';

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

app.use(cors());
app.use(express.json());
app.use('/api/blogs', blogRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
