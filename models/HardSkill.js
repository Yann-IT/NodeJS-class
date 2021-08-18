const mongoose = require("mongoose");

const hardskillSchema = mongoose.Schema({
    name:{type:String, require:true},
    description:{type:String, require:true}
});

module.exports= mongoose.model("HardSkill", hardskillSchema);