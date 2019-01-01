const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
	itemId: { type: Number }, 
	userId: { type: Number },
	name: { type: String }, 
	cost: { type: Number },
	currency: { type: String },
	amount: { type: Number },
	url: { type: String }
});

module.exports = mongoose.model('Item', ItemSchema);