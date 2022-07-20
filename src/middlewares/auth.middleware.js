import cookieParser from "cookie-parser";
import "dotenv/config";

export let token;

export const loggedIn = (req, res, next) => {
  const user = req.session.user;

  if (!user) {
    return res.status(401).redirect('/');
  };

  next();
};

export const adminOnly = (req, res, next) => {
    if( req.session.user.status !== "1" ){
        return res.status(401).send("Accesso restringido");
    }  
    next();
};
