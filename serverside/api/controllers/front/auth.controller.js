const User = require("../../modells/user.model");
const bcrypt = require('bcryptjs');
const {generateToken} = require("../../config/helpingFunctions");

exports.register = async(req, res, next) =>{
    try{
        console.log(`data--`, req.body);
        let { firstName, lastName, email, password, phone, country } = req.body;
        if (firstName && lastName && email && password && phone && country) {
            email = email.toLowerCase();
            let user = await User.findOne({ email });
            if (user) {
              return res
                .status(200)
                .send({ status: false, message: "User already exists" });
            }
            const rounds = 10;
            const hash = await bcrypt.hash(password, rounds);
            password = hash;
            let payload = {
              firstName,
              lastName,
              email,
              password,
              country,
              phone
            };
            user = await User.create(payload);
            if (user) {
              return res
                .status(200)
                .send({ status: true, data: user, message: "registered successfully" });
            }
          } else
            return res
              .status(200)
              .send({ status: false, message: "Required fields are missing" });
        } 
        catch(error){
            next(error);
        }
}
exports.login = async(req, res, next) => {
    try{
        const {email,password} = req.body;
        email.toLowerCase();
        const userDoc = await User.findOne({email});
        console.log(`user-doc--`,userDoc);
        if(userDoc){
            if(bcrypt.compareSync(password, userDoc.password) == true){
                let ac_token = await generateToken(userDoc._id)
                let responseObjec ={
                    ...userDoc._doc, ac_token:ac_token
                }
                return res
                .send({success:true,message:"User loggedIn Successfully", responseObjec});
            } else{
                res
                .status(200)
                .send({success:false, message:"Your credentials are not correct"});
            }
        } else{
            return res
            .status(200)
            .send({success:false, message:"User not found "});
        }
    } catch(error){
        next(error)
    }
}