import jwt from 'jsonwebtoken';

/*
Patient Content
*/

export const home = (req, res) => {
    const access_token = req.cookies.access_token;

    res.status(200).json({message: 'Hello!'});
};