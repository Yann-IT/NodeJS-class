const NoDevExperience = require("../models/NoDevExperience");

exports.postNoDevExperience = (req, res, next) => {
    const nodevexperience = new NoDevExperience({...req.body})
    nodevexperience
        .save()
        .then(()=>res.status(201).json({message : "NoDevExperience enregistrée !"}))
        .catch((err)=> res.status(400).json({message : "NoDevExperience pas enregistrée !"}));
}
exports.getNoDevExperience = (req, res, next) => {
    NoDevExperience.find().then(nodevexperiences  => res.status(200).json(nodevexperiences))
}
exports.deleteNoDevExperience = (req, res, next) => {
    NoDevExperience.deleteOne({_id: req.params.id})
        .then(()=> res.status(200).json({message : "NoDevExperience supprimée"}))
        .catch((error)=> res.status(400).json({error}));
}
exports.putNoDevExperience = (req, res, next) => {
    NoDevExperience.updateOne(
        {_id: req.params.id},
        {...req.body, _id: req.params.id})
        .then(()=> res.status(200).json({message : "NoDevExperience modifiée"}))
        .catch((error)=> res.status(400).json({error}));
}