const jwtDecode = require('jwt-decode');

export const auth = (req :any,res :any,next :any)=>{
    const token = req.cookies.Token;
    if(!token){
        return res.status(401).json({message:'Authentication invalid'});
    }
    
    const decodedToken = jwtDecode(token);
    const userInfo = {
        user_id : decodedToken.user_id,
        email: decodedToken.email}
    const expiresAt = decodedToken.exp;

    return res.status(201).json({
      //  jwtToken: token,
        userInfo: userInfo,
        expiresAt: expiresAt,      
    })
}

export const logout = (req : any,res :any,next :any)=> {
    res.clearCookie('Token');
}