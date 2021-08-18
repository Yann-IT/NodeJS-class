const mongoose = require("mongoose");

const formationSchema = mongoose.Schema({
    title:{type:String, require:true},
    description:{type:String, require:true},
    school:{type:String, require:true},
    date:{type:String, require:true}
});

module.exports= mongoose.model("Formation", formationSchema);