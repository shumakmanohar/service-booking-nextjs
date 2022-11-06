import SimpleImageSlider from "react-simple-image-slider";
import "./../styles/hero.module.css";

const Hero = () => {
	const images = [
		{
			url: "",
		},
		{
			url: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
		},
		{
			url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		},
	];
	return (
		<div className="w-full h-[400px] md:h-[900px] lg:[400px] relative mt-2 md:mt-10">
			<div className="tet-"></div>
			<SimpleImageSlider
				width={"100%"}
				height={"90%"}
				images={images}
				showBullets={true}
				showNavs={true}
			/>
		</div>
	);
};

export default Hero;
