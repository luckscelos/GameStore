import { Router } from 'express';
import { createGamesController } from '../controllers/games/createGames.controller';
import deleteGamesController from '../controllers/games/deleteGames.controller';
import { listAdminAllGamesController } from '../controllers/games/listAdminAllGames.controllers';
import { listGamesActiveController } from '../controllers/games/listAllGames.controller';
import { listOneGamesControllers } from '../controllers/games/listOneGames.controller';
import { UpdateGamesControllers } from '../controllers/games/updateGames.controller';
import { verifyAuthUserMiddleware } from '../middlewares/verifyAuthUser.middleware';
import { verifyGameIsActiveMiddleware } from '../middlewares/verifyGameIsActive.middleware';

const routes = Router();
// caso o usuário seja admistrador, ele consegue listar todos os jogos
// caso o usuário não seja adminstrador, ele lista apenas os jogos que estão ativos
export const gamesRoutes = () => {
  routes.post('', verifyAuthUserMiddleware, createGamesController); // rota precisa de verifyAdminMiddleware,
  routes.get('', verifyAuthUserMiddleware, listAdminAllGamesController);
  routes.patch('/:id', verifyAuthUserMiddleware, UpdateGamesControllers); //rota precisa de verifyAdminMiddleware
  routes.delete('/:id', deleteGamesController); //rota precisa de verifyAdminMiddleware

  // rota precisa de verifyAdminMiddleware
  routes.get('/isActive', verifyAuthUserMiddleware, listGamesActiveController);
  routes.get('/:id', verifyAuthUserMiddleware, listOneGamesControllers);
  return routes;
};
