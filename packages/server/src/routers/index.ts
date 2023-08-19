import Router from '@koa/router';
import config from '../config';
import { useUserRouter } from './user';
const router = new Router();
const { DEBUG, MOCK } = config.mode;
router.get('/', async (ctx, next) => {
  if (MOCK) {
    ctx.body = 'hello sugar';
  }

  if (DEBUG) {
  }
});

useUserRouter(router);

export default router;
