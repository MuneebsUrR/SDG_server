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

// Route to increment pledges based on title
router.post('/increment-pledge', async (req, res) => {
    const { title } = req.body;

    try {
        // Find the campaign by title and increment the pledges field
        const updatedCampaign = await Campaign.findOneAndUpdate(
            { title: title },
            { $inc: { pledges: 1 } },
            { new: true }
        );

        // If the campaign is not found
        if (!updatedCampaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }

        res.status(200).json({ message: 'Pledge incremented successfully!', campaign: updatedCampaign });
    } catch (error) {
        res.status(500).json({ message: 'Error incrementing pledge', error });
    }
});

// Route to get all campaigns
router.get('/get-all', async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.status(200).json(campaigns);
    } catch (error) {
        res.status(500).json({ message: 'Error getting campaigns', error });
    }
});

// Route to get a campaign by title

router.get('/get-campaign/:title', async (req, res) => {
    const { title } = req.params;

    try {
        const campaign = await Campaign.findOne({ title: title });
        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }
        res.status(200).json(campaign);
    } catch (error) {
        res.status(500).json({ message: 'Error getting campaign', error });
    }
}
);

module.exports = router;
