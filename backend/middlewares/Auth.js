const jwt = require('jsonwebtoken');

const Auth = async(req,res,next) =>{
    let jwtToken = req.header("Authorization");

    //si el token es diferente o no tiene termina la ejecucion
    if(!jwtToken) return res.status(400).send("No token please login");

    jwtToken = jwtToken.split(" ")[1];

    if(!jwtToken) return res.status('Invalid Token Please Checkout');

    try {
        const payload = await jwt.verify(jwtToken,process.env.SECRET_KEY_JWT);
        req.user = payload;
        next();
    } catch (e) {
        return res.status(400).send("Sorry Please try again");
    }

}

module.exports = Auth;