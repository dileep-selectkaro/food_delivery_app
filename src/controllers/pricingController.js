
const PricingService = require('../services/priceCalculator');

exports.calculatePrice = async (req, res) => {
    try {
        const { zone, organization_id, total_distance, item_type } = req.body;
        const totalPrice = await PricingService.calculatePrice(zone, organization_id, total_distance, item_type);
        res.json({ total_price: totalPrice });
    } catch (error) {
        console.error('Error calculating price:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

