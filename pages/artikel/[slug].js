import Head from "next/head";
import Date from "../../components/date";
// import { getAllArtikelIds, getArtikelData } from "../../lib/artikel";
import { client } from "../../lib/client";
import { PortableText } from "@portabletext/react";
import styles from "./[Slug].module.css";

export async function getStaticProps({ params: { slug } }) {
	const postDetailQuery = `*[_type == "post" && slug.current == "${slug}"][0]`;
	const postDetail = await client.fetch(postDetailQuery);

	return {
		props: {
			postDetail,
		},
	};
}

export async function getStaticPaths() {
	const query = `*[_type == "post"]{
		slug{
			current
		}
	}`;
	const posts = await client.fetch(query);
	const paths = posts.map((post) => ({
		params: {
			slug: post.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
}

const components = {
	types: {
		code: (props) => (
			<pre data-language={props.node.language}>
				<code>{props.node.code}</code>
			</pre>
		),
	},
};

export default function Artikel({ postDetail }) {
	const { title, date, content } = postDetail;
	console.log(content);
	return (
		<div className={styles.root}>
			<Head>
				<title>{title}</title>
			</Head>
			<article className="">
				<h1 className="mb-2 text-3xl font-bold text-dark-400 md:mb-4 md:text-4xl">
					{title}
				</h1>
				<p className="mb-4 text-base text-dark-100 md:mb-9">
					<Date dateString={date} />
				</p>
				<div className="articleBody text-lg">
					<PortableText value={content} components={components} />
				</div>
				{/* <div
					className="articleBody text-lg"
					dangerouslySetInnerHTML={{ __html: content }}
				/> */}
			</article>
		</div>
	);
}

function blocksToText(blocks) {
	return blocks.map((block) =>
		block.children.map((child) => child.text).join("")
	);
}
