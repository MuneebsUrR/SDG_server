const mongoose = require('mongoose');

// Create the Campaign Schema
const campaignSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    pledges: {
        type: Number,
        default: 0,
    },
    description:{
        type: String,
        required: true,
    },
    sdgs: {
        type: [Number],
        required: true,
    }
});


const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
