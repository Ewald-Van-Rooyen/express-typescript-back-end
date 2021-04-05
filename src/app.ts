import express, {Application} from "express";

import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import passport from "passport";

import * as dotenv from "dotenv";

import pingRouter from "./router/ping.router";

const version = 1;

dotenv.config();

// Boot express
const app: Application = express();

// http request logging
app.use(morgan("dev"));

// enable cors
app.use(cors());

// http headers for security support
app.use(helmet());

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

app.use(passport.initialize());
app.use(passport.session());

// Application routing
app.use(`/api/v${version}`, pingRouter);

export default app;

