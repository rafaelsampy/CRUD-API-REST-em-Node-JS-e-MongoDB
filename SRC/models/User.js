const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		require: true
	},
	password: {
		type: String,
		require: true
	}
});

UserSchema.plugin(mongoosePaginate);
mongoose.model("User", UserSchema);