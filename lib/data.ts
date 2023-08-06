import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const mainNavLinks = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const socials = [
	{
		label: "Visit Github Page Of Cemre",
		icon: AiFillGithub,
		href: "https://github.com/cemsjam",
	},
	{
		label: "Visit LinkedIn Page Of Cemre",
		icon: AiFillLinkedin,
		href: "https://github.com/cemsjam",
	},
] as const;
