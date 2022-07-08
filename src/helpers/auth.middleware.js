import "dotenv/config";
import jwt from "jsonwebtoken";

export const loggedIn = (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) return res.status(401).send("Acceso restringido");

  try {
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    }

    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    if(verified.status === '1' || verified.status === '2' || verified.status == '3') {
        const req_url = req.baseUrl+req.route.path;

        if(req_url.includes("home/:id") && req.params.id !== verified.id) {
          return res.status(401).send("Acceso restringido");
        }
    }
    req.user = verified;
    next();

  } catch (err) {
    res.send('Ha ocurrido un error de autenticación');
  }
};

export const adminOnly = (req, res, next) => {
    if( req.user.status !== "1" ){
        return res.status(401).send("Accesso restringido");
    }  
    next();
};
