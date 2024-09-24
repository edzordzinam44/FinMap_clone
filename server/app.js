import express, { json } from 'express';
// eslint-disable-next-line no-unused-vars
import cors from 'cors';
import dbClient from './config/db';
import router from './routes/authRoutes';
import financeRouter from './routes/financeRoutes';
import dashboardRouter from './routes/dashboardRouter';
import budgetRouter from './routes/budgetRoutes';
import loanRouter from './routes/loanRoutes';

require('dotenv').config();

const app = express();

app.use(cors());

// const corsOptions = {
//   origin: 'http://loocalhost:4391',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };
// app.use(cors(corsOptions));

app.use(json());
app.use('/api/auth', router);
app.use('/api/finance', financeRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/budget', budgetRouter);
app.use('/api/loan', loanRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on  port ${PORT}`);
});
