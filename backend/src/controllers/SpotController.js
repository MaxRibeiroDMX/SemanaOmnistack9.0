const Spot = require('../models/Spot');

module.exports = {
    async store(req,res){
        //importing information from Spot model
        const { filename } = req.file;
        const {company, techs, price} = req.body;
        const {user_id}=req.headers;

        //User validation
        const user = await User.findById(user_id);
        if(!user){
            return res.status(400).json({error:"Usuario não exist"});
        }
    
        const spot = await Spot.create({
            user:user_id,
            thumbnail:filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot);
    }
};