import { Category } from "../category"

export interface IGamesrequest{
    name:string
    price:number
    age:number
    launch:Date
    description:string
    developer:string
    id_category:Category
};