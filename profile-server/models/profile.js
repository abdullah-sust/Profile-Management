const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Profile Schema & model
const ProfileSchema = new Schema({
	username: {
		type: String,
		required: [true, 'Name required']
	},
	email: {
		type: String,
		required: [true, "Email required"]
	},
	password: {
		type: String,
		required: [true, "Password required"]
	},
	gender: {
		type: String,
		required: [true, "Gender required"]
	},
	address: {
		type: String,
		required: [true, "Address required"]
	},
	dob: {
		type: String,
		required: [true, "Date of birth required"]
	}
});

// creating out model of ProfileSchema type
const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;