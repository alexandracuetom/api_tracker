import { Router } from 'express';

const userRouter = Router();

//GET /users -> get ALL users
//GET /users/:id -> get user by id

userRouter.get( '/', (req,res) => res.send({ title: 'Get all users'} ));

userRouter.get( '/:id', (req,res) => res.send({ title: 'Get user details'} ));

userRouter.post( '/', (req,res) => res.send({ title: 'Create a new user'} ));

userRouter.put( '/:id', (req,res) => res.send({ title: 'Update user'} ));

userRouter.post( '/:id', (req,res) => res.send({ title: 'Delete user'} ));

export default userRouter;