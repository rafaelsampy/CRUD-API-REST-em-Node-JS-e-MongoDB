const mongoose = require('mongoose');
const Orientado = mongoose.model('Orientado');

module.exports = {
	async index(req, res) {
		const {page = 1} = req.query;
		const orientados = await Orientado.paginate({}, {page, limit: 2});

		return res.json(orientados);
	},
	async view(req, res) {
		const orientados = await Orientado.findById(req.params.id);

		return res.json(orientados);
	},
	async create(req, res) {
		const orientados = await Orientado.create(req.body);
		
		return res.json(orientados);
	},
	async update(req, res) {
		const orientados = await Orientado.findByIdAndUpdate(req.params.id, req.body, {new: true});

		return res.json(orientados);
	},
	async delete(req, res) {
		const orientados = await Orientado.findByIdAndRemove(req.params.id);

		return res.orientados();
	}
};