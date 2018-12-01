const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
	async index(req, res) {
		const {page = 1} = req.query;
		const users = await User.paginate({}, {page: page, limit: 2});

		return res.json(users);
	},
	async view(req, res) {
		const users = await User.findById(req.params.id);

		return res.json(users);
	},
	async create(req, res) {
		const users = await User.create(req.body);

		return res.json(users);
	},
	async update(req, res) {
		const users = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

		return res.json(users);
	},
	async delete(req, res) {
		const users = await User.findByIdAndRemove(req.params.id);

		return res.send();
	},
	async search(req, res) {
		const users = await User.findOne(req.body);
		
	    return res.json(users);
	}
};