import * as Service from '../services/patient.service';

/*
Patient Content
*/

export const home = (req, res) => {
    res.status(200).json({message: 'Hello!'});

};

export const getUser = (req, res) => {
    const user = Service.getUser(req.session.user.id);
    console.log(req.session);
    return user;
};