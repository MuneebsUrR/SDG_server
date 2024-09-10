const express = require('express');
const router = express.Router();
const Campaign = require('../Model/Campaign');

// POST route to add a campaign
router.post('/add', async (req, res) => {
    const campaigns = req.body;

    try {
        const createdCampaigns = await Campaign.insertMany(campaigns);
        res.status(201).json({ message: 'Campaigns created successfully!', campaigns: createdCampaigns });
    } catch (error) {
        res.status(500).json({ message: 'Error creating campaigns', error });
    }
});

module.exports = router;
