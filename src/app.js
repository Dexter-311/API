//Global settings
import "dotenv/config";

//Node
import path from "path";

//Express
import express from "express";
import session from "express-session";

//Sequelize
import sequelize from "./database";

//Connect-Sequelize
import Store from 'connect-session-sequelize';

//Third-party libraries
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

//Routes
import adminRoutes from "./routes/admin.routes";
import patientsRoutes from "./routes/patients.routes";
import authRoutes from "./routes/auth.routes";

//Swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDocs from "swagger-jsdoc";
import { options } from "./swaggerOptions";

const app = express();

app.use(helmet());
app.use(cookieParser());

const SequelizeStore = Store(session.Store);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    name: "sessionId",
    saveUninitialized: false,
    store: new SequelizeStore({
      db: sequelize,
      expiration: 1 * 60 * 1000,
      checkExpirationInterval: 1 * 60 * 1000,
    }),
    cookie: {
      secure: false,
      maxAge: 90 * 1000
    },
  })
);

app.set("port", process.env.PORT);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(express.static(path.join("public")));

app.use(authRoutes);
app.use(adminRoutes);
app.use(patientsRoutes);

const specs = swaggerJsDocs(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

app.get("/test", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "login.html"));
  console.log(__dirname);
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

export default app;
