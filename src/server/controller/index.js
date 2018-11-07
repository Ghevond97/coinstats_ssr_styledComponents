import { Router } from 'express';

import homePage from './homePage.js';
import coinstats from './coinstats';

export const routers = () => {
  const router = Router();
  homePage(router);
  return router;
};
