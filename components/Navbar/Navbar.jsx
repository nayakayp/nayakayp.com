import Link from "next/link";

import { FaBars } from "react-icons/fa";
import { Button } from "../../components";

const Navbar = () => {
	const navigations = [
		{ name: "Profil", link: "/profil" },
		{ name: "Artikel", link: "/artikel" },
	];
	return (
		<nav className="w-full bg-white px-4 py-2 shadow-sm md:px-0">
			<div className="mx-auto flex max-w-4xl items-center justify-between text-3xl text-dark-400 ">
				<Link href="/">
					<a id="logo" className="w-[128px]">
						<img src="/images/nayaka-logo.png" alt="Logo Nayaka" />
					</a>
				</Link>
				<FaBars className="block md:hidden" />
				<ul className="hidden items-center space-x-7 md:flex">
					{navigations.map((nav) => (
						<li className="text-base font-semibold uppercase" key={nav.name}>
							<Link href={nav.link}>
								<a>{nav.name}</a>
							</Link>
						</li>
					))}
					<li>
						<Link href="/hire">
							<a>
								<Button
									bgColor="var(--primary-color)"
									textColor="var(--secondary-color)"
								>
									Hire Me
								</Button>
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
