const Collage = () => {
	return (
		<div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2">
			<div className=" cursor-pointer hover:scale-105 transition transform duration-200 ease-out realtive w-full  rounded-lg drop-shadow-md ">
				<img
					src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					alt=""
					className="rounded-lg"
					width={"100%"}
				/>
			</div>
			<div className="grid gap-2 grid-cols-1 md:grid-cols-2 md:grid-rows-2">
				<div className=" realtive w-full  rounded-lg drop-shadow-md ">
					<img
						src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
						alt=""
						className="rounded-lg"
						width={"100%"}
					/>
				</div>
				<div className=" realtive w-full  rounded-lg drop-shadow-md ">
					<img
						src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
						alt=""
						className="rounded-lg"
						width={"100%"}
					/>
				</div>
				<div className=" realtive w-full  rounded-lg drop-shadow-md ">
					<img
						src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
						alt=""
						className="rounded-lg"
						width={"100%"}
					/>
				</div>
				<div className=" realtive w-full  rounded-lg drop-shadow-md ">
					<img
						src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
						alt=""
						className="rounded-lg"
						width={"100%"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Collage;
