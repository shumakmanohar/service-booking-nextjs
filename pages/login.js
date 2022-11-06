import { TextField } from "@mui/material";
import { useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password && email) {
			setLoading(true);
			const res = await signIn("credentials", {
				username: email,
				password,
				redirect: false,
			});
			if (res.ok) {
				router.push("/dashboard");
			}
			setLoading(false);
		}
	};
	return (
		<div className="container mx-auto">
			<div className="my-16">
				<h1 className="text-3xl mb-4">Log IN</h1>
				<p className="opacity-60"> Log In to View the Dashboard</p>
			</div>
			<div>
				<form action="" className="max-w-sm flex flex-col space-y-4">
					<TextField
						fullWidth
						id="outlined-basic"
						label="Email"
						variant="outlined"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<TextField
						fullWidth
						id="outlined-basic-password"
						label="Password"
						type="password"
						variant="outlined"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<button
						onClick={handleSubmit}
						className={`${
							loading && "animate-pulse"
						}  bg-green-600 text-white  text-center shadow-md rounded-lg py-4`}
					>
						{loading ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-8 h-8 mx-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-8 h-8 mx-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
								/>
							</svg>
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;

export async function getServerSideProps(context) {
	const session = await getSession(context);
	console.log(session);
	if (session) {
		return {
			redirect: {
				destination: "/dashboard",
				permanent: false,
			},
		};
	}
	return {
		props: {},
	};
}
