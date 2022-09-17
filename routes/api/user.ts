import { Router } from 'express';

export default (router: Router) => {
  router.get('/user', (req, res) => {
    res.json({
      code: 0,
    });
  });
};
