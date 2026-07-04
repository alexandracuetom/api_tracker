import jwt from 'jsonwebtoken';
import {JWT_SECRET}  from '../config/env.js';
import User from '../models/user.model.js';

const authorize = async (req, res, next) => {

    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
        {
            token = req.headers.authorization.split(' ')[1]; //eliminate 'Bearer'
        }

        if (!token) return res.status(401).json({message: 'Unathorized'});

        const verifiedToken = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(verifiedToken.userId);

        if (!user) return res.status(401).json({message: 'Unathorized'});

        req.user = user;

        next(); //forward to next function as this is middleware

    } catch (error)
    {
        res.status(401).json({message: 'Unathorized', error: error.message});
    }
}

export default authorize;