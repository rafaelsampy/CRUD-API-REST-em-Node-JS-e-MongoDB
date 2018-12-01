const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const OrientationSchema = new mongoose.Schema({
	nome_orientador: {
		type: String,
		require: true
	},
	sala_orientador: {
		type: String,
		require: true
	},
	email_orientador: {
		type: String,
		require: true
	},
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

OrientationSchema.plugin(mongoosePaginate);
mongoose.model("Orientation", OrientationSchema);