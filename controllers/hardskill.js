const HardSkill = require("../models/HardSkill");

exports.postHardSkill = (req, res, next) => {
    const hardskill = new HardSkill({...req.body})
    hardskill
        .save()
        .then(()=>res.status(201).json({message : "HardSkill enregistrée !"}))
        .catch((err)=> res.status(400).json({message : "HardSkill pas enregistrée !"}));
}
exports.getHardSkill = (req, res, next) => {
    HardSkill.find().then(hardskills  => res.status(200).json(hardskills))
}
exports.deleteHardSkill = (req, res, next) => {
    HardSkill.deleteOne({_id: req.params.id})
        .then(()=> res.status(200).json({message : "HardSkill supprimée"}))
        .catch((error)=> res.status(400).json({error}));
}
exports.putHardSkill = (req, res, next) => {
    HardSkill.updateOne(
        {_id: req.params.id},
        {...req.body, _id: req.params.id})
        .then(()=> res.status(200).json({message : "HardSkill modifiée"}))
        .catch((error)=> res.status(400).json({error}));
}