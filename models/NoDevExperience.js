const mongoose = require("mongoose");

const nodevexperienceSchema = mongoose.Schema({
    theme:{type:String, require:true},
    description:{type:String, require:true},
    job:{type:String, require:true},
    realization:{type:String, require:true},
    date:{type:String, require:true}
});

module.exports= mongoose.model("NoDevExp", nodevexperienceSchema);
