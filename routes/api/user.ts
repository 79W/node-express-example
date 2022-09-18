import { Router } from 'express';
import { userModels } from '../../models';

export default (router: Router) => {
  router.get('/user', async (req, res) => {
    const users = await userModels.userInfo(1);
    res.json(users);
  });
};
