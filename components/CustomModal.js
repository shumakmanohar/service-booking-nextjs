import { Alert, AlertTitle } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import BookingForm from "./BookingForm";

const CustomModal = ({ open, setOpen, handleClose, handleOpen }) => {
	const [loading, setLoading] = useState(null);
	const [serviceID, setServiceID] = useState("");
	const [formSubmitted, setFormSubmitted] = useState(false);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className="flex justify-center items-center "
			>
				<section className="w-[90%] max-w-3xl bg-white   p-4">
					<h1 className="text-3xl my-6 text-center">Book Your Service </h1>
					{formSubmitted ? (
						<Alert severity="success" sx={{ marginBottom: "20px" }}>
							<AlertTitle>Service Booked</AlertTitle>
							<p>
								Successfully Registered your Service ,Please Refer to the Admin
								Panel , To View Your Booking. Your Service ID is :
							</p>
							<b className="text-3xl">{serviceID}</b>
						</Alert>
					) : (
						<BookingForm
							loading={loading}
							setServiceID={setServiceID}
							setLoading={setLoading}
							formSubmitted={formSubmitted}
							setFormSubmitted={setFormSubmitted}
						/>
					)}
				</section>
			</Modal>
		</div>
	);
};

export default CustomModal;
