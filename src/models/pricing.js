// const mongoose = require('mongoose');

// const pricingSchema = new mongoose.Schema({
//   organization_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Organization',
//     required: true,
//   },
//   item_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Item',
//     required: true,
//   },
//   zone: {
//     type: String,
//     required: true,
//   },
//   base_distance_in_km: {
//     type: Number,
//     required: true,
//   },
//   km_price: {
//     type: Number,
//     required: true,
//   },
//   fix_price: {
//     type: Number,
//     required: true,
//   },
// });

// module.exports = mongoose.model('Pricing', pricingSchema);







const mongoose = require('../config');

const PricingSchema = new mongoose.Schema({
    organization_id: String,
    item_id: String,
    zone: String,
    base_distance_in_km: Number,
    km_price: Number,
    fix_price: Number
});

const Pricing = mongoose.model('Pricing', PricingSchema);

module.exports = Pricing;

