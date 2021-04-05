import HttpException from "exceptions/http.exception";
import {NextFunction, Request, Response} from "express";

function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction): void {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";

    response
        .status(status)
        .send({
            status,
            message,
        });

    next();
}

export default errorMiddleware;
