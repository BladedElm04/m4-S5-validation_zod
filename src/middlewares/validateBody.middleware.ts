import { NextFunction, Request, Response } from "express";
import { createProductBodySchema } from "../schema/createProductBody.schema";
import { AnyZodObject, ZodError } from "zod";

export class ValidateBody {
    static execute(schema: AnyZodObject){
       return (req: Request, res: Response, next: NextFunction) => {
           try {
               req.body = schema.parse(req.body);
   
               next();
           } catch (error) {
                if(error instanceof ZodError){
                    return res.status(409).json(error)
                }
           }
       }
    }
}