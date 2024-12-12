import Image from "next/image";

function Avatar() {
	return (
		<div className="flex items-center justify-center relative rounded-[50%] overflow-hidden h-fit">
			<Image
				// className="rounded-[50%] overflow-hidden border border-black"
				// className="rounded-[50%] overflow-hidden"
				// src={"/static/images/portfolio-cems.jpg"}
				className="max-w-[400px]"
				src={"/static/images/casablanca-cems-transparent.png"}
				alt="Cemre's personal image"
				priority
				width={400}
				height={400}
			/>
			{/* <div className="bg-gradient-to-br from-orange-600  to-purple-500 absolute h-3/4 -bottom-6 -right-20 left-0 -z-10 -rotate-[25deg] blur-[10rem]"></div> */}
		</div>
	);
}

export default Avatar;
