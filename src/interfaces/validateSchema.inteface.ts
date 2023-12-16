import { AnyZodObject } from "zod";

export interface IValidateSchema {
    params?: AnyZodObject,
    body?: AnyZodObject,
    query?: AnyZodObject
}