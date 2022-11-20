import {login, register} from '../controllers/user.controller';
import { Router } from 'express';
import { validateLogin, validateRegister } from '../validations/user.validation';
const userRouter = Router();

userRouter.post('/login', validateLogin, login);
userRouter.post('/register', validateRegister, register);

export default userRouter;