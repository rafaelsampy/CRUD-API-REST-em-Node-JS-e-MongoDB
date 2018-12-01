const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const OrientacaoSchema = new mongoose.Schema({
	nome_orientador: {
		type: String,
		require: true
	},
	nome_orientado: {
		type: String,
		require: true
	},
	tema: {
		type: String,
		require: true
	},
	descricao: {
		type: String,
		require: true
	}
});

OrientacaoSchema.plugin(mongoosePaginate);
mongoose.model("Orientacao", OrientacaoSchema);