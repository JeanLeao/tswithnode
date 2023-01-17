import { Request, Response } from "express"

export var jsonResponse = (req: Request, res: Response) => {
    res.status(200).sendStatus(200)
}

export var jsonOla = (req: Request, res: Response) => {
    res.send('Olá')
}