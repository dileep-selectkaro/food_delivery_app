
const mongoose = require('./config'); 
const Pricing = require('./models/pricing');


const pricingData = [
  {
    organization_id: "005",
    item_id: "1",
    zone: "central",
    base_distance_in_km: 5,
    km_price: 1.5,
    fix_price: 10
  },
  
];

Pricing.insertMany(pricingData)
  .then(() => {
    console.log('Pricing data inserted successfully');
    process.exit(0);
  })
  .catch(error => {
    console.error('Error inserting pricing data:', error);
    process.exit(1);
  });
