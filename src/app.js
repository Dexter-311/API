//Global settings
import "dotenv/config";

//Node
import path from "path";

//Express
import express from "express";
import session from "express-session";

//Redis
import ConnectRedis from "connect-redis";
import { createClient } from "redis";

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

app.set("trust proxy", 1);

const RedisStore = ConnectRedis(session);

const RedisClient = createClient({ host: '127.0.0.1', port: 6379, legacyMode: true });

RedisClient.connect().catch(console.error);
RedisClient.on("error", console.error);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: new RedisStore({ client: RedisClient }),
    resave: false,
    name: "sessionId",
    saveUninitialized: false,
    cookie: {
      maxAge: 120,
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
