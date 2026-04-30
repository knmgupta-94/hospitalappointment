import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRouter.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

// middleware
app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:5174', // or specify your frontend URL like 'http://localhost:5174'
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'atoken'], // add 'atoken' here
};

app.use(cors(corsOptions));

// api endpoints
app.get('/', (req, res) => {
  res.send('API WORKING');
});

app.use('/api/admin',adminRouter)

//localhost:4000/api/admin

// start server
app.listen(port, () => console.log(`Server started on port ${port}`));
