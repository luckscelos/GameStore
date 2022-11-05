import { Express } from 'express';
import { paymentInfoRoutes } from './paymentInfos.routes';
import { cartRoutes } from './cart.routes';
import { gamesRoutes } from './games.routes';
import { purchasedRoutes } from './purchased.routes';
import { sessionRoutes } from './session.routes';
import { userRoutes } from './users.routes';

import { categoriesRoutes } from './categories.routes';
import { favoriteRoutes } from './favorite.routes';

export const appRoutes = (app: Express) => {
  app.use('/users', userRoutes());
  app.use('/payment_infos', paymentInfoRoutes());
  app.use('/purchased', purchasedRoutes());
  app.use('/cart', cartRoutes());
  app.use('/login', sessionRoutes());
  app.use('/categories', categoriesRoutes());
  app.use('/games', gamesRoutes());
  app.use('/favorite', favoriteRoutes());
};