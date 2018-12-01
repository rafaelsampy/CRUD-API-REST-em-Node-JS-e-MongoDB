const mongoose = require('mongoose');
const Orientacao = mongoose.model('Orientacao');

module.exports = {
	async index(req, res) {
		const {page = 1} = req.query;
		const orientacoes = await Orientacao.paginate({}, {page, limit: 2});

		return res.json(orientacoes);
	},
	async view(req, res) {
		const orientacoes = await Orientacao.findById(req.params.id);

		return res.json(orientacoes);
	},
	async create(req, res) {
		const orientacoes = await Orientacao.create(req.body);
		
		return res.json(orientacoes);
	},
	async update(req, res) {
		const orientacoes = await Orientacao.findByIdAndUpdate(req.params.id, req.body, {new: true});

		return res.json(orientacoes);
	},
	async delete(req, res) {
		const orientacoes = await Orientacao.findByIdAndRemove(req.params.id);

		return res.orientacoes();
	}
};