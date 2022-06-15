import Head from "next/head";
import Image from "next/image";

import { Divider, ArticleList, ArticleHeading } from "../components";
import { siteTitle } from "../components/Layout/Layout";
import { client } from "../lib/client";

import utilStyles from "../styles/utils.module.css";
import photoProfile from "../public/images/nayaka-photo.png";

const Home = ({ posts }) => {
	return (
		<>
			<Head>
				<title>{siteTitle} - Web Developer</title>
			</Head>

			<section className="">
				<div className="flex flex-col-reverse md:flex-row md:justify-between">
					<div className="">
						<h1 className="mb-4 mt-4 text-3xl font-semibold text-dark-400 md:mt-0 md:mb-7 md:text-5xl">
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
					<div className="h-32 w-32 md:h-56 md:w-56">
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

			<section className="mt-10 md:mt-16">
				<ArticleHeading
					titleLeft="Artikel Terbaru"
					titleRight={`Semua Artikel (${posts.length})`}
					isLink={true}
				/>
				<Divider className="mt-4 mb-6 h-[1px] bg-dark-100" />
				{posts?.map(({ post: _id, date, slug, title }) => (
					<ArticleList
						key={_id}
						slug={slug.current}
						date={date}
						title={title}
					/>
				))}
			</section>
		</>
	);
};

export const getServerSideProps = async () => {
	const query = '*[ _type == "post" && !(_id in path("drafts.**"))]';
	const posts = await client.fetch(query);

	return {
		props: { posts },
	};
};

export default Home;
