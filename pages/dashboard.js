import Navbar from "../components/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import clientPromise from "../lib/mongodb";
import { TrashIcon } from "@heroicons/react/24/solid";
import { getSession, useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Dashboard = ({ services, session }) => {
	const [servicesList, setServicesList] = useState(services);

	const deleteData = async (_id) => {
		//Delete the Data based on the user role,
		//making a delete request to the backend.
		//also pass in the session to make a backend verification of the user.
		if (session.user.role === "admin") {
			toast.success("Data Deleted", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});

			//Network Request to Backend
			const result = await fetch("/api/services", {
				method: "Delete",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ session, serviceID: _id }),
			});
			if (!result.ok) throw Error("Fetch Failed");
			const response = await result.json();

			setServicesList(servicesList.filter((service) => service._id != _id));

			return;
		}
		toast.warn(
			"Access Denied , Guest Users are not permitted to alter the Database",
			{
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			}
		);
	};
	return (
		<div className="container mx-auto">
			<Navbar dashboard={true}></Navbar>
			<div className="my-10">
				<h1 className="text-5xl mb-4">Dashboard</h1>
				<p className="font-semibold opacity-70">View All Bookings</p>
			</div>
			<ToastContainer />
			<div>
				<TableContainer component={Paper}>
					<Table
						stickyHeader
						sx={{ minWidth: 650, maxHeight: 140 }}
						aria-label="simple table"
					>
						<TableHead>
							<TableRow>
								<TableCell align="left">Booking ID</TableCell>
								<TableCell align="right">Appointment Date</TableCell>
								<TableCell align="right">Service Type</TableCell>
								<TableCell align="right">Name</TableCell>
								<TableCell align="right">Email</TableCell>
								<TableCell align="right">Phone Number</TableCell>
								<TableCell align="right">Time of Booking</TableCell>
								<TableCell align="right">Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{servicesList.map(
								({
									_id,
									name,
									date,
									timeSlot,
									serviceType,
									phone,
									email,
									serviceID,
								}) => (
									<TableRow
										key={_id}
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
									>
										<TableCell
											align="left"
											component="th"
											scope="row"
											className="font-bold "
										>
											{serviceID}
										</TableCell>
										<TableCell align="right">{date}</TableCell>
										<TableCell align="right">{serviceType}</TableCell>
										<TableCell align="right">{name}</TableCell>
										<TableCell align="right">{email}</TableCell>
										<TableCell align="right">{phone}</TableCell>
										<TableCell align="right">{timeSlot}</TableCell>
										<TableCell align="right">
											<TrashIcon
												onClick={() => deleteData(_id)}
												className="h-5 text-red-500 cursor-pointer"
											/>
										</TableCell>
									</TableRow>
								)
							)}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
};

export default Dashboard;

export async function getServerSideProps(context) {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}
	try {
		const client = await clientPromise;
		const db = client.db("service-booking-api");

		const services = await db
			.collection("services")
			.find({})
			.sort({ createdAt: -1 })
			.toArray();

		return {
			props: { services: JSON.parse(JSON.stringify(services)), session },
		};
	} catch (e) {
		console.error(e);
	}
}
