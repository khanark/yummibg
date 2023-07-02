import * as userService from '../services/user.service';

import { Router } from 'express';

const userRouter = Router();

// TODO: Add authenticate middleware to routes that require authentication

// register a new user
userRouter.post('/register', (req, res) => {
  userService
    .register(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json({ message: err.message }));
});

// login an existing user
userRouter.post('/login', (req, res) => {
  userService
    .login(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json({ message: err.message }));
});

// return single user
userRouter.get('/:id', (req, res) => {
  userService
    .getSingleUser(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json({ message: err.message }));
});

// update a user
userRouter.patch('/:id', (req, res) => {
  userService
    .updateUser(req.params.id, req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json({ message: err.message }));
});

export default userRouter;