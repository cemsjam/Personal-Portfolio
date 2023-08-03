import { RxHamburgerMenu } from "react-icons/rx";

export default function ToggleMenu({ toggleMenu }: { toggleMenu: () => void }) {
	return (
		<button type="button" className="order-1 lg:hidden" onClick={toggleMenu}>
			<RxHamburgerMenu />
			<span className="sr-only">Toggle Main Navigation</span>
		</button>
	);
}
