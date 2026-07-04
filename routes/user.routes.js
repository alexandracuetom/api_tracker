import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middleware/auth.middleware.js'

const userRouter = Router();

//GET /users -> get ALL users
//GET /users/:id -> get user by id

userRouter.get( '/', getUsers);

userRouter.get( '/:id',authorize, getUser);

userRouter.post( '/', (req,res) => res.send({ title: 'Create a new user'} ));

userRouter.put( '/:id', (req,res) => res.send({ title: 'Update user'} ));

userRouter.post( '/:id', (req,res) => res.send({ title: 'Delete user'} ));

export default userRouter;