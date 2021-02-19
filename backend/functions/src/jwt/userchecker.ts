const jwtDecode = require('jwt-decode');

export const attachUser = (req :any , res :any , next :any)=> {
    const token = req.cookies.Token;
    if(!token){
        return res.status(401).json({message:'Authentication invalid'});
    }

    const decodedToken = jwtDecode(token);

    if(!decodedToken){
        return res.status(401).json({
            message: 'There was a problem authorizing the request'
        });
    }else {
        req.user = decodedToken;
        next();
    }
};