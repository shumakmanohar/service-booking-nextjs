const mongoose = require("mongoose");

const ServiceSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please Enter a Valid Name"],
		trim: true,
		maxlength: [10, "Name Cannot be more than 10 characters"],
	},
	email: {
		type: String,
		required: [true, "Please Enter a Valid Email"],
		trim: true,
		maxlength: [20, "Name Cannot be more than 20 characters"],
	},
	phone: {
		type: Number,
		required: [true, "Please Enter a Valid Phone Number"],
		trim: true,
		maxLength: [10, "Name Cannot be more than 10 characters"],
	},
	serviceType: {
		type: String,
		required: [true, "Please Select a Service"],
		trim: true,
	},
	timeSlot: {
		type: String,
		required: [true, "Please Select a TimeSlot"],
		trim: true,
	},
	date: {
		type: String,
		rquired: [true, "Please Select a Date"],
	},
});
module.exports =
	mongoose.models.Service || mongoose.model("Service", ServiceSchema);
