module.exports = {
    async store(req,res){
        console.log(req.body);
        console.log(req.file);
        return res.json({message:"Ola Mundo!"});
    }
};