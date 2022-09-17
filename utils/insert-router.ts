import { Router } from 'express';

type RouterFunc = (r: Router) => void;
function insertRouter(router: Router, routers: RouterFunc[]) {
  return routers.map((r: RouterFunc) => {
    return r(router);
  });
}

export default insertRouter;
