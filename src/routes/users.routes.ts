import { Router } from 'express';

const routes = Router();

export const userRoutes = () => {
  routes.get('');

  return routes;
};
