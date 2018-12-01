const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const OrientadorSchema = new mongoose.Schema({
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
	}
});

OrientadorSchema.plugin(mongoosePaginate);
mongoose.model("Orientador", OrientadorSchema);