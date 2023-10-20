import express from 'express'
import routerControllers from '../controllers/user.js';

const router = express.Router()
router.get('/', routerControllers.showForm);
router.post('/login', routerControllers.login);
router.post('/signup',routerControllers.signup)


export default router;