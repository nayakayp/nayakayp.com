import Head from "next/head";

import {
	ArticleList,
	ArticleHeading,
	Divider,
	PageHeading,
} from "../../components";
import { siteTitle } from "../../components/Layout/Layout";
import { getSortedArtikelData } from "../../lib/artikel";

export async function getStaticProps() {
	const allArtikelData = getSortedArtikelData();
	return {
		props: {
			allArtikelData,
		},
	};
}

export default function Artikel({ allArtikelData }) {
	return (
		<>
			<Head>
				<title>Artikel - {siteTitle}</title>
			</Head>
			<PageHeading
				title="Artikel"
				subtitle="Tutorial seputar web developer. Semua yang ditulis berupa tulisan teknis yang dibahas secara lengkap dan mendalam"
			/>
			<div className="flex flex-col space-y-10">
				<section>
					<ArticleHeading titleLeft="2022" titleRight="Total Artikel (4)" />
					<Divider className="mt-4 mb-6 h-[1px] bg-dark-100" />
					<ArticleList
						id={2}
						date="2022-20-12"
						title="Bagaimana Rasanya Kerja Remote"
						excerpt="loremipsum test"
					/>
					<ArticleList
						id={2}
						date="2022-20-12"
						title="Membuat Aplikasi Fullstack Menggunakan NextJS saja"
						excerpt="loremipsum test"
					/>
					<ArticleList
						id={2}
						date="2022-20-12"
						title="Membuat Aplikasi Fullstack Menggunakan NextJS saja"
						excerpt="loremipsum test"
					/>
					<ArticleList
						id={2}
						date="2022-20-12"
						title="Membuat Aplikasi Fullstack MERN (MongoDB, ExpressJS, ReactJS & NodeJS)"
						excerpt="loremipsum test"
					/>
				</section>
				<section>
					<ArticleHeading titleLeft="2021" titleRight="Total Artikel (4)" />
					<Divider className="mt-4 mb-6 h-[1px] bg-dark-100" />
					<ArticleList
						id={2}
						date="2022-20-12"
						title="Bagaimana Rasanya Kerja Remote"
						excerpt="loremipsum test"
					/>
					<ArticleList
						id={2}
						date="2022-20-12"
						title="Membuat Aplikasi Fullstack Menggunakan NextJS saja"
						excerpt="loremipsum test"
					/>
					<ArticleList
						id={2}
						date="2022-20-12"
						title="Membuat Aplikasi Fullstack Menggunakan NextJS saja"
						excerpt="loremipsum test"
					/>
					<ArticleList
						id={2}
						date="2022-20-12"
						title="Membuat Aplikasi Fullstack MERN (MongoDB, ExpressJS, ReactJS & NodeJS)"
						excerpt="loremipsum test"
					/>
				</section>
			</div>
		</>
	);
}
