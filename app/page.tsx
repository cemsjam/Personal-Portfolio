import Footer from "@/components/Footer";
import GradientCard from "@/components/GradientCard";
import Header from "@/components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<div className="container grid md:grid-cols-3 lg:grid-cols-4 gap-4">
				<GradientCard />
				<GradientCard />
			</div>
			<Footer />
		</>
	);
}
