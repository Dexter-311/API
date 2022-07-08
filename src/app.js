import 'dotenv/config';

import express from 'express';
import path from 'path';
import ejs from 'ejs';

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import adminRoutes from './routes/admin.routes';
import patientsRoutes from './routes/patients.routes';
import authRoutes from './routes/auth.routes';

//Swagger
import swaggerUI from 'swagger-ui-express';
import swaggerJsDocs from 'swagger-jsdoc';
import { options } from './swaggerOptions';

const app = express();

app.use(helmet());
app.use(cookieParser());

app.set('port', process.env.PORT);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join('public')));
app.set('view enginge', 'ejs');

app.use(authRoutes);
app.use(adminRoutes);
app.use(patientsRoutes);

const specs = swaggerJsDocs(options);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.get('/test', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'login.html'));
    console.log(__dirname)
});

app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    console.log(__dirname)
});

export default app;