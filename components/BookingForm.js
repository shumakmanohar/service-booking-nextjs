import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CircularProgress, FormHelperText } from "@mui/material";
import { serviceTypes } from "../data/serviceTypes";
import CustomDatepicker from "./CustomDatepicker";
import { Controller } from "react-hook-form";
import { TimeSlots } from "../data/timeSlot";
import { schema } from "../data/Schema";

const BookingForm = ({
	loading,
	setLoading,
	formSubmitted,
	setServiceID,
	setFormSubmitted,
}) => {
	const [service, setService] = useState("");
	const [timeSlot, setTimeSlot] = useState("");

	const {
		register,
		handleSubmit,
		watch,
		reset,
		control,
		formState: { errors },
	} = useForm({
		mode: "onSubmit",
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			serviceType: "",
			timeSlot: "",
			date: new Date(Date.now()).toUTCString(),
		},
		resolver: yupResolver(schema),
	});

	const handleServieChange = (event) => {
		setService(event.target.value);
	};
	const handleTimeSlotChange = (event) => {
		setTimeSlot(event.target.value);
	};

	const onSubmitForm = async (data) => {
		setLoading(true);
		try {
			const result = await fetch("/api/services", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (!result.ok) throw Error("Fetch Failed");
			const response = await result.json();
			setServiceID(response); // From Server
			setLoading(false);
			reset({
				name: "",
				email: "",
				phone: "",
				serviceType: "",
				timeSlot: "",
				date: new Date(Date.now()).toUTCString(),
			});
			setFormSubmitted(true);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmitForm)}
			className="grid grid-cols-1  md:grid-cols-2 gap-5"
		>
			<TextField
				error={errors.name ? true : false}
				helperText={errors.name ? errors.name.message : ""}
				{...register("name")}
				name="name"
				id="name"
				label="Name"
				variant="outlined"
				disabled={loading}
			/>{" "}
			<TextField
				{...register("email")}
				error={errors.email ? true : false}
				helperText={errors.email ? errors.email.message : ""}
				name="email"
				id="email"
				label="Email"
				variant="outlined"
				disabled={loading}
			/>
			<TextField
				{...register("phone")}
				error={errors.phone ? true : false}
				helperText={errors.phone ? errors.phone.message : ""}
				name="phone"
				id="phone"
				label="Phone"
				variant="outlined"
				disabled={loading}
			/>
			{/* Service Type */}
			<div>
				<FormControl
					disabled={loading}
					error={errors.serviceType ? true : false}
					fullWidth
				>
					<InputLabel id="demo-simple-select-label">Service Type</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={service}
						{...register("serviceType")}
						name="serviceType"
						label="Service Type"
						className="text-amber-500"
						onChange={handleServieChange}
					>
						{serviceTypes.map(({ value, id }) => (
							<MenuItem key={id} value={value}>
								{value}
							</MenuItem>
						))}
					</Select>
					<FormHelperText>
						{errors.serviceType ? errors.serviceType.message : ""}
					</FormHelperText>
				</FormControl>
			</div>
			<CustomDatepicker loading={loading} control={control} errors={errors} />
			{/* TIME SLOT  */}
			<div>
				<FormControl
					disabled={loading}
					error={errors.timeSlot ? true : false}
					fullWidth
				>
					<InputLabel id="demo-simple-select-label">Time Slot</InputLabel>

					<Select
						{...register("timeSlot")}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						name="timeSlot"
						label="Time Slot"
						value={timeSlot}
						className="text-amber-500"
						onChange={handleTimeSlotChange}
					>
						{TimeSlots.map(({ value, id }) => (
							<MenuItem key={id} value={value}>
								{value}
							</MenuItem>
						))}
					</Select>

					<FormHelperText>
						{errors.timeSlot ? errors.timeSlot.message : ""}
					</FormHelperText>
				</FormControl>
			</div>
			<button
				type="submit"
				disabled={loading}
				className="md:col-span-2 p-4 text-white font-bold bg-fuchsia-700 rounded-lg"
			>
				{loading ? (
					<CircularProgress size={35} sx={{ color: "white" }} />
				) : (
					"Book Now"
				)}
			</button>
		</form>
	);
};

export default BookingForm;
