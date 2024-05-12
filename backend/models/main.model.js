const mongoose = require('mongoose');
const MainSchema = new mongoose.Schema({
    // DOUBLE CHECK THAT ONE SCHEMA WORKS FOR BOTH CONCRETE AND AGGREGATES
    //everyday mixes or 3/4 washed
    name: { type: String },
    details: { 
        // concrete - 60104303
        mix: {type:Number},
        // aggregate - 3/8 inch
        size: {type:String},
        // both
        cost: {type:Double}
    },
}, { timestamps: true });
module.exports = mongoose.model('Main', MainSchema);