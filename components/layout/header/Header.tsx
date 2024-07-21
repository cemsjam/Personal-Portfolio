import MainNavigation from "./MainNavigation";
import Widgets from "@/components/layout/Widgets";

function Header() {
	return (
		<header>
			<div className="container flex items-center justify-between h-16">
				<div className="logo order-2 lg:order-none">logo</div>
				<MainNavigation />
				<div className="order-3 lg:order-none">
					<Widgets />
				</div>
			</div>
		</header>
	);
}

export default Header;
