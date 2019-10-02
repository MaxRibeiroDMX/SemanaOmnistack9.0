const User = require('../models/User');
//Exports the methods of aplication
module.exports = {
    async store(req,res){
        //Get email from post body
        const {email} = req.body;

        //Add the info for user model
        const user = await User.create({email});
        return res.json(user);
    }
};