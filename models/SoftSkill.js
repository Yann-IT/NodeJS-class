const mongoose = require("mongoose");

const softskillSchema = mongoose.Schema({
    name:{type:String, require:true},
    description:{type:String, require:true}
});

module.exports= mongoose.model("SoftSkill", softskillSchema);