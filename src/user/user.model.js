const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	userId: { type: Number }, 
	name: { type: String }, 
	role: { type: String }, 
	walletId: { type: Number },
	inventory: { type: Array }
});

module.exports = mongoose.model('User', UserSchema);