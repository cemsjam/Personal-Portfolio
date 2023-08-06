"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

import ToggleMenu from "./ToggleMenu";
import ThemeSwitch from "../../ThemeSwitch";
import NavigationLinks from "./NavigationLinks";

export default function MainNavigation() {
	const [openMenu, setOpenMenu] = useState(false);
	const toggleMenu = () => {
		setOpenMenu((prev) => !prev);
	};
	return (
		// drawer
		<div>
			<ToggleMenu toggleMenu={toggleMenu} />
			<Transition.Root show={openMenu} as={Fragment}>
				<Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpenMenu}>
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{/* backdrop */}
						<div className="fixed inset-0 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-[80%] w-full lg:max-w-md">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="-translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="-translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto w-full">
									<div className="flex flex-col h-full  t-bg-color border-r t-border-color">
										<div className="flex items-center justify-between h-16 px-4 sm:px-6 border-b t-border-color">
											<button type="button" onClick={() => setOpenMenu(false)}>
												<span className="sr-only">Close panel</span>
												<IoMdClose className="h-6 w-6" aria-hidden="true" />
											</button>
											<div className="logo">logo</div>
											<ThemeSwitch />
										</div>
										{/* content */}
										<NavigationLinks classes="lg:hidden" />
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
			<NavigationLinks classes="hidden lg:block" desktop />
		</div>
	);
}
