const SoftSkill = require("../models/SoftSkill");

exports.postSoftSkill = (req, res, next) => {
    const softskill = new SoftSkill({...req.body})
    softskill
        .save()
        .then(()=>res.status(201).json({message : "SoftSkill enregistrée !"}))
        .catch((err)=> res.status(400).json({message : "SoftSkill pas enregistrée !"}));
}
exports.getSoftSkill = (req, res, next) => {
    SoftSkill.find().then(softskills  => res.status(200).json(softskills))
}
exports.deleteSoftSkill = (req, res, next) => {
    SoftSkill.deleteOne({_id: req.params.id})
        .then(()=> res.status(200).json({message : "SoftSkill supprimée"}))
        .catch((error)=> res.status(400).json({error}));
}
exports.putSoftSkill = (req, res, next) => {
    SoftSkill.updateOne(
        {_id: req.params.id},
        {...req.body, _id: req.params.id})
        .then(()=> res.status(200).json({message : "SoftSkill modifiée"}))
        .catch((error)=> res.status(400).json({error}));
}