import jwt from "jsonwebtoken";
//Read authorization headers
export const auth=(req,res,next)=>{
    //headers sent by react will in req.headers
    const authHeader=req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({
            success:false,
            message:"Access Denied"
        })
    }
    //Extract the token
    const token =authHeader.split("")[1];
    //bearer:"gfuwfwhwfijwfofkfdifgwuyfwfebjwgyjwe"

    //verify the jwt token
    const decoded =jwt.verify(
        token,
         process.env.JWT_SECRET
    );
    //Verifies Signature 
    //Expiry
    //Secret Key

    //stores the user information 
    req.user=decoded
    //next passes the control to next middleware of the controller

    next()
};