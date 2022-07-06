import 'dotenv/config';
import express from 'express';
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

app.set('port', process.env.PORT);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(authRoutes);
app.use(adminRoutes);
app.use(patientsRoutes);

const specs = swaggerJsDocs(options);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;