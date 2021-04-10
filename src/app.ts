import express, {Application} from "express";

import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import passport from "passport";

import errorHandler from "errorhandler";
import actuator from "express-actuator";

import * as dotenv from "dotenv";

import pingRouter from "./router/ping.router";
import errorMiddleware from "./middleware/error.middleware";

const version = 1;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === "production";

dotenv.config();

// Boot express
const app: Application = express();

// setup express actuator for service health
app.use(actuator());

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

if (!isProduction) {
    app.use(errorHandler());
}

// Application routing
app.use(errorMiddleware);
app.use(`/api/v${version}`, pingRouter);


export default app;

