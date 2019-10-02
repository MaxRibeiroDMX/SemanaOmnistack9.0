const User = require('../models/User');
//Exports the methods of aplication
module.exports = {
    async store(req,res){
        //Get email from post body
        const {email} = req.body;

        let user = await User.findOne({email});//Search in database for the email registered
        if(!user){
            user = await User.create({email});
        }
        //Add the info for user model
        return res.json(user);
    }
};