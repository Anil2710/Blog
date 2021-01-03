const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
	Tite: {
		type: String,
		required: true
	},
    Description: {
		type: String,
		required: true
	},
    Comments: 
		{
            Comment:{
                type: String,
                required: true
            },
            profleId:{
                type: Schema.Types.ObjectId,
                ref: 'Posts'
            }
        }   
                     	
});

module.exports = Post = mongoose.model('Posts', PostSchema);