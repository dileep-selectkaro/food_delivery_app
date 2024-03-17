
const Pricing = require('../models/pricing');

exports.calculatePrice = async (zone, organizationId, totalDistance, itemType) => {
    const pricing = await Pricing.findOne({ organization_id: organizationId, zone: zone }).exec();
    if (!pricing) throw new Error('Pricing not found for the given organization and zone');

    let basePrice = pricing.fix_price;
    if (totalDistance > pricing.base_distance_in_km) {
        const additionalDistance = totalDistance - pricing.base_distance_in_km;
        basePrice += additionalDistance * (itemType === 'perishable' ? pricing.km_price : pricing.km_price / 2);
    }
    return basePrice;
};

