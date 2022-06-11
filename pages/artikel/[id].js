import Head from "next/head";
import Date from "../../components/date";
import { getAllArtikelIds, getArtikelData } from "../../lib/artikel";

export async function getStaticProps({ params }) {
	const artikelData = await getArtikelData(params.id);

	return {
		props: {
			artikelData,
		},
	};
}

export async function getStaticPaths() {
	const paths = getAllArtikelIds();
	return {
		paths,
		fallback: false,
	};
}

export default function Artikel({ artikelData }) {
	return (
		<>
			<Head>
				<title>{artikelData.title}</title>
			</Head>
			<article className="">
				<h1 className="mb-2 text-3xl font-bold text-dark-400 md:mb-4 md:text-4xl">
					{artikelData.title}
				</h1>
				<p className="mb-4 text-base text-dark-100 md:mb-9">
					<Date dateString={artikelData.date} />
				</p>
				<div
					className="articleBody text-lg"
					dangerouslySetInnerHTML={{ __html: artikelData.contentHtml }}
				/>
			</article>
		</>
	);
}
