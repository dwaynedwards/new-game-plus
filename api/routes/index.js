import express from 'express';
import {
  getGames,
  getGame,
  getGamesByPlatform
} from '../controllers/gameController';
import { catchErrors } from '../utils/errorHandlers';

const router = express.Router();

router.get('/games', catchErrors(getGames));
router.get('/games/:platform/:slug', catchErrors(getGame));
router.get('/games/:platform/', catchErrors(getGamesByPlatform));

export default router;
