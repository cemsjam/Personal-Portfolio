import Logo from "@/components/Logo";
import MainNavigation from "./MainNavigation";
import Widgets from "@/components/layout/Widgets";

function Header() {
	return (
		<header className="shadow">
			<div className="container flex items-center justify-between h-16">
				<Logo />
				<MainNavigation />
				<div className="order-3 lg:order-none">
					<Widgets />
				</div>
			</div>
			<div className="clipped-bg"></div>
		</header>
	);
}

export default Header;
