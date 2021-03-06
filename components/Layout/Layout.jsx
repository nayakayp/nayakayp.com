import Head from "next/head";

import { Navbar, Footer } from "../../components";

export const siteTitle = "Nayaka Yoga Pradipta";

const Layout = ({ children }) => {
	return (
		<div className="bg-[#FDFDFD] px-4 md:px-0">
			<Head>
				<title>{siteTitle}</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="description"
					content="Nayaka Yoga Pradipta adalah seorang freelance web developer"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<script
					data-host="https://microanalytics.io"
					data-dnt="false"
					src="https://microanalytics.io/js/script.js"
					id="ZwSg9rf6GA"
					async
					defer
				></script>
			</Head>
			<header className="-mx-4">
				<Navbar />
			</header>
			<main className="mx-auto min-h-[80vh] max-w-4xl pt-16 pb-24">
				{children}
			</main>
			<footer className="-mx-4 min-h-[10vh] bg-white shadow-2xl">
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
