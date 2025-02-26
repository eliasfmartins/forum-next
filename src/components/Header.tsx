"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
	{ name: "Home", path: "/" },
	{ name: "Discussões", path: "/discussoes" },
	{ name: "Categorias", path: "/categorias" },
	{ name: "Contato", path: "/contato" },
];

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-full shadow-xl z-50">
			<div className="flex justify-between items-center px-6 py-3">
				{/* Logo */}
				<Link href="/">
					<span className="text-2xl font-bold text-green-400">FórumTech</span>
				</Link>

				{/* Navegação Desktop */}
				<nav className="hidden md:flex space-x-6">
					{navItems.map((item) => (
						<Link
							key={item.path}
							href={item.path}
							className="text-gray-300 hover:text-green-400 transition-all duration-300"
						>
							{item.name}
						</Link>
					))}
				</nav>

				{/* Botões */}
				<div className="hidden md:flex space-x-4">
					<Link
						href="/signin"
						className="px-4 py-2 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-800 transition-all duration-300"
					>
						Sign In
					</Link>
					<Link
						href="/signup"
						className="px-4 py-2 bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-400 transition-all duration-300"
					>
						Sign Up
					</Link>
				</div>

				{/* Menu Mobile */}
				<button
					className="md:hidden text-gray-300"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Overlay e Menu Mobile Fullscreen */}
			<div
				className={clsx(
					"fixed inset-0 bg-gray-900/100 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500",
					menuOpen
						? "opacity-100 visible h-screen w-full rounded-none"
						: "opacity-0 invisible h-0 w-0"
				)}
			>
				{/* Título no Overlay */}
				<div className="text-center text-3xl font-bold text-green-400 mb-8">
					FórumTech
				</div>

				<button
					className="absolute top-6 right-6 text-gray-300"
					onClick={() => setMenuOpen(false)}
				>
					<X size={32} />
				</button>

				{/* Navegação Mobile */}
				<nav className="flex flex-col space-y-6 text-center">
					{navItems.map((item) => (
						<Link
							key={item.path}
							href={item.path}
							className="text-2xl text-gray-300 hover:text-green-400 transition-all duration-300"
							onClick={() => setMenuOpen(false)}
						>
							{item.name}
						</Link>
					))}
				</nav>

				{/* Botões Mobile */}
				<div className="mt-8 flex flex-col space-y-4">
					<Link
						href="/signin"
						className="px-6 py-3 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-800 transition-all duration-300"
						onClick={() => setMenuOpen(false)}
					>
						Sign In
					</Link>
					<Link
						href="/signup"
						className="px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-400 transition-all duration-300"
						onClick={() => setMenuOpen(false)}
					>
						Sign Up
					</Link>
				</div>
			</div>
		</header>
	);
}
