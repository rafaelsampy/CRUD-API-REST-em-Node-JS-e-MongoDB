const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const OrientadoSchema = new mongoose.Schema({
	nome_orientado: {
		type: String,
		require: true
	},
	ra_orientado: {
		type: String,
		require: true
	},
	email_orientado: {
		type: String,
		require: true
	},
	curso_orientado: {
		type: String,
		require: true
	}
});

OrientadoSchema.plugin(mongoosePaginate);
mongoose.model("Orientado", OrientadoSchema);