import { Request, Response } from "express";

export function firstRoute(request: Request, response: Response){
    return response.json({message: 'Hello WOrld'})
}

