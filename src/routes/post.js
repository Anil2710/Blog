const express = require('express');

const router = express.Router();

const Post = require('../model/Post');

const Profile = require('../model/Profile');

//1. get all posts

router.get('/posts', async (req, res) => {
	try {
		const posts = await Post.find({});
		res.send(posts);
	} catch (error) {
		res.status(404).send({ error: 'Path not found' });
	}
});

//2. Get post by id

router.get('/getPost/:id', async (req, res) => {
	const PostId = req.params.id;
	try {
		const Post = await User.findById(PostId);
		if (!Post) {
			return res.status(404).send({ error: 'User not found' });
		}
		res.send(Post);
	} catch (error) {
		res.status(500).send({ error: 'Internal server error' });
	}
});

//3. Delete post by id

router.delete('/Delete/:id', async (req, res) => {
	try {
		const PostId = await User.findByIdAndDelete(req.params.id);
		if (!Post) {
			return res.status(404).send({ error: 'User not found' });
		}
		res.send(user);
	} catch (error) {
		res.status(500).send({ error: 'Internal server error' });
	}
});

//5. Get profile by comment id

router.get('/getProfile/:CommentId', async (req, res) => {
	const CommentId = req.params.id;
	try {
		const  Profile = await User.findById(CommentId);
		if (!Profile) {
			return res.status(404).send({ error: 'User not found' });
		}
		res.send(Profile);
        } 
    catch (error) {
		res.status(500).send({ error: 'Internal server error' });
	}
});

//6. Delete comment

router.delete('/:id/Posts/:Pid/deleteComment/:Pid', async (req, res) => {
	const PostId = req.params.Pid;
	const ProfileId = req.params.Pid;
	try {
		const Post = await Post.findById([PostId]);
		if (!Post) {
			return res.status(404).send({ error: 'Post not found' });
		}
		const Profile = await Profile.findByIdAndDelete(ProfileId);
		if (!Profile) {
			return res.status(404).send({ error: 'Comment not found' });
		}
		res.send(Profile);
	} catch (error) {
		res.status(500).send({ error: 'Internal server error' });
	}
});

module.exports = router;