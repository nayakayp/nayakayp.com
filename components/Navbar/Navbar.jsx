import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const Navbar = () => {
	const navigations = [
		{ name: "Profil", link: "/profil" },
		{ name: "Artikel", link: "/artikel" },
	];

	const [isOpenToWork, setIsOpenToWork] = useState(false);
	const router = useRouter();

	return (
		<nav className="w-full bg-white px-4 py-2 shadow-sm md:px-0">
			<div className="mx-auto flex max-w-4xl flex-col items-center justify-between text-3xl text-dark-400 md:flex-row ">
				<Link href="/">
					<a id="logo" className="w-[128px]">
						<img src="/images/nayaka-logo.png" alt="Logo Nayaka" />
					</a>
				</Link>
				{/* <FaBars className="block md:hidden" /> */}
				<ul className="mt-4 flex items-center space-x-7 md:mt-0">
					{navigations.map((nav) => (
						<li className="text-base font-semibold uppercase" key={nav.name}>
							<Link href={nav.link}>
								<a>{nav.name}</a>
							</Link>
						</li>
					))}
					<div className="group relative flex items-center justify-center">
						<Link href={`${isOpenToWork ? "/hire" : router.pathname}`}>
							<a className="text-base font-semibold uppercase text-dark-400 group-hover:cursor-not-allowed md:rounded-md md:bg-dark-400 md:py-2 md:px-8 md:font-normal md:text-white">
								Hire Me
							</a>
						</Link>
						<div className="fixed top-1/2 left-1/2 -z-50 w-60 -translate-y-1/2 -translate-x-1/2 rounded-lg bg-turq-200 p-8 opacity-0 shadow-lg transition-all duration-300 group-hover:z-50 group-hover:opacity-100 md:absolute md:top-full md:right-0 md:left-auto md:mt-4 md:w-96 md:translate-x-0 md:translate-y-0">
							<p className="text-base text-white">
								Saat ini saya tidak terbuka untuk bekerja secara paruh waktu.
								Pekerjaan utama dan fokus untuk menulis artikel di web ini sudah
								menghabiskan banyak waktu.
							</p>
						</div>
					</div>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
