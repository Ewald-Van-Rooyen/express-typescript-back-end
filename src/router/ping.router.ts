import {Router, Request, Response, NextFunction} from "express";
import createError from "http-errors";

const pingRouter = Router();

pingRouter.get("/ping", async (request: Request, response: Response, next: NextFunction) => {
    try {
        response.status(200).send({data: "Server is active"});
    } catch (error) {
        next(createError(500, error));
    }
});

export default pingRouter;
