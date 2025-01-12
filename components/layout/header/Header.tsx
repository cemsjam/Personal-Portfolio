import Logo from "@/components/Logo";
import MainNavigation from "./MainNavigation";
import Widgets from "@/components/layout/Widgets";

function Header() {
	return (
		<header className="sticky z-[70] top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
			<div className="container flex items-center justify-between h-16">
				<Logo />
				<MainNavigation />
				<div className="order-3 lg:order-none">
					<Widgets />
				</div>
			</div>
		</header>
	);
}

export default Header;
