import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import createFavoriteService from '../../services/favorite/createFavorite.service';

const createFavoriteController= async(req:Request,res:Response)=>{

    const{ id_games }=req.body

    const favorite = await createFavoriteService({ id_games })

    return res.status(200).json(instanceToInstance(favorite))
}
export default createFavoriteController
