const mongoose = require("mongoose");

const devexperienceSchema = mongoose.Schema({
    name:{type:String, require:true},
    description:{type:String, require:true},
    type:{type:String, require:true},
    stack:{type:String, require:true},
    date:{type:String, require:true}
});

module.exports= mongoose.model("DevExps", devexperienceSchema);
