import {Request, Response} from "express";

const RESPONSE_ERROR_NAME = "ResponseError";

export default function makeExpressCallback(controller: (request) => Promise<any>) {
    return (req: Request, res: Response) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params
        };

        controller(httpRequest)
            .then(data => {
                return res.json({
                    status: 'ok',
                    data
                });
            })
            .catch((error) => {
                if (error.name === RESPONSE_ERROR_NAME) {
                    return res.status(error.code).json({
                        status: "ko",
                        message: error.message,
                    });
                }
                console.error(error);
                return res.status(500).json({
                    ok: "ko",
                    message: "SERVER_ERROR",
                });
            })
    }
}