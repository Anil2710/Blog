const mongoose = require('mongoose');
const Post = require('./Post');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
	name: {
		type: String,
		required: true
    }
});

module.exports = Profile = mongoose.model('Profiles', ProfileSchema);