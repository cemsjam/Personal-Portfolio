import MainNavigation from "./MainNavigation";
import SocialLinks from "./SocialLinks";

function Header() {
	return (
		<header>
			<div className="container flex items-center justify-between h-16">
				<div className="logo order-2 lg:-order-none">logo</div>
				<MainNavigation />
				<div className="order-3 lg:order-none">
					<SocialLinks />
				</div>
			</div>
		</header>
	);
}

export default Header;
