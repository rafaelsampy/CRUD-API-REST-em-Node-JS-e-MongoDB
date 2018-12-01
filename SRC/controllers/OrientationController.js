const mongoose = require('mongoose');
const Orientation = mongoose.model('Orientation');

module.exports = {
	async index(req, res) {
		const {page = 1} = req.query;
		const orientations = await Orientation.paginate({}, {page, limit: 2});

		return res.json(orientations);
	},
	async view(req, res) {
		const orientations = await Orientation.findById(req.params.id);

		return res.json(orientations);
	},
	async create(req, res) {
		const orientations = await Orientation.create(req.body);
		
		return res.json(orientations);
	},
	async update(req, res) {
		const orientations = await Orientation.findByIdAndUpdate(req.params.id, req.body, {new: true});

		return res.json(orientations);
	},
	async delete(req, res) {
		const orientations = await Orientation.findByIdAndRemove(req.params.id);

		return res.orientations();
	}
};