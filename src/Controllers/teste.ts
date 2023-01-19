import { Request, Response } from "express"
import { movieModel } from "../Models/Movie"

export var jsonResponse = async (req: Request, res: Response) => {

    var data = req.body
    var moviecreated = await movieModel.create(data)
    res.status(200).json(moviecreated)
}

export var jsonOla = (req: Request, res: Response) => {
    res.send('Olá')
}