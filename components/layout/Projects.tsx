import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import SectionMainHeadings from "../SectionMainHeadings";

function Projects() {
	const t = useTranslations("projects");
	return (
		<section className="w-full flex flex-col gap-24">
			<SectionMainHeadings>{t("title")}</SectionMainHeadings>
			{/* PROJECT 1 E-COMMERCE */}
			<div className=" max-w-screen-2xl w-full mx-auto px-4">
				<div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-gray-50 project-card-bg p-8 rounded-2xl dark:text-[#EDEDEF]">
					{/* IMAGE SIDE */}
					<div className="flex md:w-1/2 items-center justify-center">
						<div className=" w-full max-w-sm md:max-w-none lg:mx-0 rounded-2xl overflow-hidden project-image-shadow -mt-[6rem]">
							<Toolbar />
							<div className="border border-zinc-600 overflow-hidden rounded-b-2xl ">
								<Link href={"https://cems-react-ecommerce.netlify.app/"} target="_blank" rel="noopener noreferrer">
									<Image
										src={"/static/images/ecommerce-app-home-page.png"}
										className="w-full"
										alt="Cemre's personal image"
										width={576}
										height={1024}
									/>
								</Link>
							</div>
						</div>
					</div>
					{/* INFO SIDE */}
					<div className="md:w-1/2">
						<ProjectHeading> E-commerce App</ProjectHeading>
						<Accordion type="single" collapsible className="w-full">
							<AccordionItem value="item-1">
								<AccordionTrigger>Fully Responsive Design</AccordionTrigger>
								<AccordionContent>Optimized for seamless usage across all devices.</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-2">
								<AccordionTrigger>Advanced Search with Autocomplete</AccordionTrigger>
								<AccordionContent>Integrated autocomplete functionality for quick product search.</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-3">
								<AccordionTrigger>Homepage Product Sliders</AccordionTrigger>
								<AccordionContent>Browse featured products through interactive sliders.</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-4">
								<AccordionTrigger>Product Page Navigation</AccordionTrigger>
								<AccordionContent>Easily navigate to individual product pages from the homepage.</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-5">
								<AccordionTrigger>Persistent Shopping Cart</AccordionTrigger>
								<AccordionContent>
									Add and remove products with persistence via local storage, whether authenticated or not.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-6">
								<AccordionTrigger>Dedicated Wishlist Functionality</AccordionTrigger>
								<AccordionContent>
									Manage a wishlist with add/remove functionality, stored similarly to the cart.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-7">
								<AccordionTrigger>Wishlist Page</AccordionTrigger>
								<AccordionContent>View and manage all items in the wishlist on a dedicated page.</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-8">
								<AccordionTrigger>Breadcrumb Navigation</AccordionTrigger>
								<AccordionContent>
									Clear and accessible navigation on product and category pages via breadcrumbs.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-9">
								<AccordionTrigger>Search Result Filtering</AccordionTrigger>
								<AccordionContent>Filter products by category, brand, or both on the search page.</AccordionContent>
							</AccordionItem>

							<AccordionItem value="item-10">
								<AccordionTrigger>URL-Based State Management</AccordionTrigger>
								<AccordionContent>
									Search page filters are reflected in the URL for easy sharing, allowing others to view the exact
									filtered results.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</div>
			{/* PROJECT 2 WORDLE */}
			<div className=" max-w-screen-2xl w-full mx-auto px-4">
				<div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 bg-gray-50 project-card-bg p-8 rounded-2xl dark:text-[#EDEDEF]">
					{/* INFO SIDE */}
					<div className="md:w-1/2">
						<ProjectHeading>Wordle Clone</ProjectHeading>
						<Accordion type="single" collapsible className="w-full">
							<AccordionItem value="wordle-item-1">
								<AccordionTrigger>Word Guessing Game</AccordionTrigger>
								<AccordionContent>
									Replicates the core Wordle gameplay where users guess a five-letter word within a limited number of
									attempts.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="wordle-item-2">
								<AccordionTrigger>Tile Flip Animation</AccordionTrigger>
								<AccordionContent>
									Each tile flips to reveal whether the guessed letter is correct, in the correct position, or not in
									the word at all.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="wordle-item-3">
								<AccordionTrigger>Feedback on Guesses</AccordionTrigger>
								<AccordionContent>
									Visual feedback is provided as users guess letters, with colors indicating correct and incorrect
									guesses.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="wordle-item-4">
								<AccordionTrigger>Word Validation</AccordionTrigger>
								<AccordionContent>
									Ensures that entered words are valid five-letter words before processing the guess.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="wordle-item-5">
								<AccordionTrigger>Daily Word Challenge</AccordionTrigger>
								<AccordionContent>
									Mimics the original Wordle concept of providing one daily word for players to guess.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="wordle-item-6">
								<AccordionTrigger>Keyboard Input Support</AccordionTrigger>
								<AccordionContent>
									Supports keyboard input for easier gameplay, where players can type directly on their keyboard to
									input guesses.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="wordle-item-7">
								<AccordionTrigger>Responsive Design</AccordionTrigger>
								<AccordionContent>
									Fully responsive, allowing gameplay on both desktop and mobile devices seamlessly.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="wordle-item-8">
								<AccordionTrigger>Color-coded Hints</AccordionTrigger>
								<AccordionContent>
									Colors on tiles change to provide hints: green for correct, yellow for misplaced, and gray for
									incorrect letters.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="wordle-item-9">
								<AccordionTrigger>Win/Loss Notifications</AccordionTrigger>
								<AccordionContent>
									Displays notifications when the player wins or loses after completing all attempts.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
					{/* IMAGE SIDE */}
					<div className="flex md:w-1/2 items-center justify-center">
						<div className=" w-full max-w-sm md:max-w-none lg:mx-0 rounded-2xl overflow-hidden project-image-shadow -mt-[6rem]">
							<Toolbar />
							<div className="border border-zinc-600 overflow-hidden rounded-b-2xl self-center">
								<Link
									href={"https://cems-simplified-wordle-clone.netlify.app/"}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src={"/static/images/wordle-clone-app.png"}
										className="w-full"
										alt="Cemre's personal image"
										width={576}
										height={1024}
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;

function ProjectHeading({ children }: { children: React.ReactNode }) {
	return <h4 className="text-4xl font-bold mb-8">{children}</h4>;
}
function Toolbar() {
	return (
		<div className="h-8 bg-zinc-600  flex items-center p-1">
			{/* dots */}
			<div className="flex gap-2 ml-3">
				<div className="w-4 h-4 rounded-full bg-red-400"></div>
				<div className="w-4 h-4 rounded-full bg-white"></div>
				<div className="w-4 h-4 rounded-full bg-green-500"></div>
			</div>
		</div>
	);
}
