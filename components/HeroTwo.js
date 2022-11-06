import { CalendarIcon } from "@heroicons/react/24/solid";

const HeroTwo = ({ handleOpen }) => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
				<div className="lg:max-w-lg lg:w-full mb-10 md:w-1/2 w-5/6 md:mr-10">
					<img
						className="object-cover object-center rounded"
						alt="hero"
						src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					/>
				</div>
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
						Lorem ipsum dolor sit amet.
						<br className="hidden lg:inline-block" />
						Lorem, ipsum dolor.
					</h1>
					<p className="mb-8 leading-relaxed">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
						maiores distinctio hic. Hic voluptate sapiente recusandae ut quam
						adipisci temporibus, accusantium quisquam? Deleniti atque ipsam
						quidem labore placeat id officia?
					</p>
					<div className="flex justify-center">
						<button
							onClick={handleOpen}
							className="inline-flex gap-5 items-center text-white bg-fuchsia-700 border-0 py-2 px-6 focus:outline-none rounded text-lg"
						>
							Book Now
							<CalendarIcon className="h-5" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroTwo;
