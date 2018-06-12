const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');

// http://localhost:8000/api/login/abdullahalawal177@gmail.com/123
// router.get('/login/:email/:password', function(req, res) {
router.post('/login', function(req, res) {
	Profile.findOne({email: req.body.email}).then(function(profile) {
		console.log('->' + profile);
		res.send(profile);
	})
	.catch(function(error) {
		res.send({
			error: error.message
		})
	});
});


router.get('/profiles', function(req, res) {
	Profile.find({}).then(function(result) {
		console.log(result);
		res.send(result);
	})
	.catch(function(error) {
		res.send({
			error: error.message
		});
	});
});
//http://localhost:8000/api/profileCreate/awal/abdullahalawal177@gmail.com/123/Male/Dhaka/12-12-2018
// Create user's profile
// router.post('/profileCreate/:username/:email/:password/:gender/:address/:dob', function(req, res) {
	router.post('/profileCreate', function(req, res) {
	var person = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		gender: req.body.gender,
		address: req.body.address,
		dob: req.body.dob
	};
	console.log('O ' + req.body.username);
	Profile.create(person).then(function(profile) {
		console.log('I' + profile);
		res.send(profile);
	})
	.catch(function(error) {
		res.send({ 
			error : error.message
		});
	})
});

// http://localhost:8000/api/profileUpdate/awal/abdullahalawal177@gmail.com/123/Male/Dhaka/12-12-2018
// router.put('/profileUpdate/:username/:email/:password/:gender/:address/:dob', function(req, res) {
	router.put('/profileUpdate', function(req, res) {
	var person = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		gender: req.body.gender,
		address: req.body.address,
		dob: req.body.dob
	};
	console.log(person);
	Profile.update({email: req.body.email}, person).then(function() {
		Profile.findOne({email: req.body.email}).then(function(profile) {
			console.log(profile)
			res.send(profile);
		})
		.catch(function(error) {
			res.send({
				error: error.message
			});
		});
	})
	.catch(function(error) {
		res.send({
			error: error.message
		});
	});
});

router.delete('/profileDelete/:id', function(req, res) {
	Profile.deleteOne({_id: req.params.id}).then(function(profile) {
		res.send({message: 'Deleted profile'});
	})
	.catch(function(error) {
		res.send({
			error: error.message
		})
	});
});

module.exports = router;  
