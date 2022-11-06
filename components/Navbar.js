import {
	ArchiveBoxIcon,
	ArrowLeftOnRectangleIcon,
	AtSymbolIcon,
	CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { CalendarIcon } from "@heroicons/react/24/solid";

const Navbar = ({ dashboard = false }) => {
	return (
		<header className="text-gray-600 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
					<AtSymbolIcon className="h-10 text-fuchsia-700" />
					<span className="ml-3 text-xl">Service</span>
				</a>
				<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
					<a className="mr-5 hover:text-fuchsia-700">Contact</a>
					<a className="mr-5 hover:text-fuchsia-700">About Us</a>
					<a className="mr-5 hover:text-fuchsia-700">Careers</a>
					<a className="mr-5 hover:text-fuchsia-700">Team</a>
				</nav>
				{dashboard ? (
					<button className="text-white gap-4 inline-flex items-center  bg-fuchsia-700 border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
						Logout
						<ArrowLeftOnRectangleIcon className="h-5" />
					</button>
				) : (
					<button className="text-white gap-4 inline-flex items-center  bg-fuchsia-700 border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
						<Link href="/dashboard">DashBoard</Link>
						<ArchiveBoxIcon className="h-5" />
					</button>
				)}
			</div>
		</header>
	);
};

export default Navbar;
