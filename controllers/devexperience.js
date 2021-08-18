const DevExperience = require("../models/DevExperience");

exports.postDevExperience = (req, res, next) => {
    const devexperience = new DevExperience({...req.body})
    devexperience
        .save()
        .then(()=>res.status(201).json({message : "DevExperience enregistrée !"}))
        .catch((err)=> res.status(400).json({message : "DevExperience pas enregistrée !"}));
}
exports.getDevExperience = (req, res, next) => {
    DevExperience.find().then(devexperiences  => res.status(200).json(devexperiences))
}
exports.deleteDevExperience = (req, res, next) => {
    DevExperience.deleteOne({_id: req.params.id})
        .then(()=> res.status(200).json({message : "DevExperience supprimée"}))
        .catch((error)=> res.status(400).json({error}));
}
exports.putDevExperience = (req, res, next) => {
    DevExperience.updateOne(
        {_id: req.params.id},
        {...req.body, _id: req.params.id})
        .then(()=> res.status(200).json({message : "DevExperience modifiée"}))
        .catch((error)=> res.status(400).json({error}));
}