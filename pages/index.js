import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Divider, ArticleList } from "../components";
import { siteTitle } from "../components/Layout/Layout";

import { getSortedArtikelData } from "../lib/artikel";
import utilStyles from "../styles/utils.module.css";
import photoProfile from "../public/images/nayaka-photo.png";

export async function getStaticProps() {
	const allArtikelData = getSortedArtikelData();
	return {
		props: {
			allArtikelData,
		},
	};
}

const Home = () => {
	return (
		<>
			<Head>
				<title>{siteTitle} - Web Developer</title>
			</Head>

			<section className="">
				<div className="flex justify-between">
					<div className="">
						<h1 className="mb-7 text-5xl font-semibold text-dark-400">
							Hi,{" "}
							<strong>
								<u>Nayaka</u>
							</strong>{" "}
							di sini!
						</h1>
						<p className="max-w-lg text-lg font-medium text-dark-400">
							Saya adalah seorang profesional web developer di Indonesia. Selain
							bekerja sebagai profesional, saya juga suka menulis sesuatu yang
							saya pelajari.
						</p>
						<p className="mt-2 max-w-lg text-lg font-medium text-dark-400">
							Saya sedang mendalami topik web programming seputar{" "}
							<u className="text-turq-400">
								<strong>ReactJS</strong>
							</u>
							,{" "}
							<u className="text-turq-400">
								<strong>NextJS</strong>
							</u>{" "}
							&{" "}
							<u className="text-turq-400">
								<strong>GSAP</strong>
							</u>
						</p>
					</div>
					<div className="">
						<Image
							priority
							src={photoProfile}
							className={utilStyles.borderCircle}
							height={215}
							width={215}
							alt="Nayaka Yoga Pradipta"
							placeholder="blur"
						/>
					</div>
				</div>
			</section>

			<section className="mt-16">
				<div className="flex items-center justify-between">
					<h2 className="text-4xl font-bold text-turq-400">Artikel Terbaru</h2>
					<Link href="/artikel">
						<a className="text-base font-semibold text-dark-300">
							Lihat semua (20)
							<Divider className="mt-2 h-[3px] bg-turq-400" />
						</a>
					</Link>
				</div>
				<Divider className="mt-4 mb-6 h-[1px] bg-dark-100" />
				<ArticleList
					id={2}
					date="2022-20-12"
					title="Nayaka is great!"
					excerpt="loremipsum test"
				/>
				<ArticleList
					id={2}
					date="2022-20-12"
					title="Nayaka is great!"
					excerpt="loremipsum test"
				/>
				<ArticleList
					id={2}
					date="2022-20-12"
					title="Nayaka is great!"
					excerpt="loremipsum test"
				/>
			</section>
		</>
	);
};

export default Home;
