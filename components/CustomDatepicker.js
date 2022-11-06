import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const CustomDatepicker = ({ control, loading }) => {
	const [value, setValue] = useState(null);
	let now = new Date();
	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<Controller
				name="date"
				control={control}
				render={({ field: { ref, ...rest } }) => (
					<DatePicker
						disabled={loading}
						inputFormat="DD/MM/yyyy"
						minDate={new Date()}
						maxDate={new Date(now.setDate(now.getDate() + 30))}
						label="Date"
						renderInput={(params) => <TextField {...params} />}
						{...rest}
					/>
				)}
			/>
		</LocalizationProvider>
	);
};

// const CustomDatepickerRef = React.forwardRef(CustomDatepicker);

export default CustomDatepicker;
