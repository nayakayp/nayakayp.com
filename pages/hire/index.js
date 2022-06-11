import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Button, Card, Layout, Form, ArticleList } from "../../components";
import { siteTitle } from "../../components/Layout/Layout";

import { getSortedArtikelData } from "../../lib/artikel";
import utilStyles from "../../styles/utils.module.css";
import Script from "next/script";
import photoProfile from "../../public/images/nayaka-photo.png";

const Hire = ({ allArtikelData }) => {
	return (
		<>
			<style jsx>{`
				.hero {
					background: var(--secondary-color);
					background-image: url("/images/hero-background.png");
					background-repeat: no-repeat;
					background-position: right bottom;
					color: var(--primary-text-color);
					padding: 6rem 0 5rem 0;
				}

				h1 {
					color: var(--primary-text-color);
				}

				.hero-wrapper {
					display: flex;
					justify-content: space-between;
					align-items: center;
					min-height: 90vh;
				}

				.hero-desc {
					width: 629px;
				}

				p,
				li {
					font-weight: 400;
				}

				.hero-list {
					display: flex;
					align-items: start;
					margin-bottom: 1rem;
				}
				.hero-intro {
					margin-top: 3rem;
				}

				.hero-benefit {
					margin: 2rem 0 1rem 0;
				}

				.hero-button {
					display: flex;
					margin-top: 2.5rem;
				}

				.horizontal-div {
					margin: 0 1rem;
				}

				.icon {
					content: url("/images/icons/check-square-fill-primary.svg");
					padding: 0.5rem 1.7rem 0 0;
				}

				@media screen and (max-width: 414px) {
					.hero-wrapper {
						flex-direction: column-reverse;
					}
					.hero-desc {
						width: 100%;
					}
					.hero-button {
						flex-direction: column;
					}
					.hero-button a {
						margin-bottom: 1rem;
					}
					.hero-illustration {
						margin-bottom: 2rem;
						width: 50%;
						z-index: 1;
					}
					.hero h1 {
						text-align: center;
					}
				}

				section.service {
					padding: 6rem 0;
				}

				.service-head {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.service h2 {
					text-align: center;
				}

				.card-wrapper {
					display: flex;
					justify-content: space-between;
					margin-top: 4rem;
				}

				@media screen and (max-width: 414px) {
					.card-wrapper {
						flex-direction: column;
						align-items: center;
					}
					.service h2 {
						width: 22rem;
					}
					.card-wrapper Card {
						margin-bottom: 1rem;
					}
				}

				.web-project {
					display: flex;
					justify-content: space-between;
					align-itmes: center;
					padding: 6rem 0;
				}

				.web-list li {
					padding: 1rem 2rem;
					margin-bottom: 1rem;
					border-radius: 0.5rem;
					cursor: pointer;
				}

				.web-list li.active {
					background: var(--accent-color);
				}

				.web-project h2 {
					margin-bottom: 4rem;
				}

				.showcase {
					display: none;
					position: relative;
					background: var(--light-background);
					width: 500px;
					height: 470px;
					border-radius: 0.5rem;
					box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
				}

				.showcase.active {
					display: initial;
				}

				.web-showcase {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.outbound-link {
					position: absolute;
					top: 0;
					right: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 5rem;
					height: 5rem;
					border-radius: 0 0.5rem 0 0;
					background: var(--primary-color-blur);
					cursor: pointer;
				}

				.outbound-link svg {
					color: var(--secondary-text-color);
					width: 3rem;
					height: 3rem;
				}

				.web-showcase ul {
					display: flex;
					align-items: center;
					margin-top: 3rem;
				}

				.bullet {
					cursor: pointer;
					height: 1rem;
					width: 1rem;
					background: var(--primary-color-blur);
					border-radius: 100%;
					margin: 0 0.4rem;
				}

				.bullet.active {
					background: var(--primary-color);
				}

				@media screen and (max-width: 414px) {
					.web-project {
						flex-direction: column;
						padding: 0 2rem;
					}
					.web-project h3 {
						font-size: 1.8rem;
					}
					.web-project p {
						font-size: 1.6rem;
					}
					.showcase {
						width: 100%;
					}
				}

				.form-wrapper {
					padding: 6rem 0;
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.form-wrapper h2 {
					margin-bottom: 3rem;
				}

				.form-wrapper p {
					text-align: center;
					max-width: 77rem;
					margin-bottom: 4rem;
				}

				@media screen and (max-width: 414px) {
					.form-wrapper {
						padding: 6rem 2rem;
					}
				}

				.artikel-home {
					padding: 6rem 0 6rem;
				}

				.artikel-home ul {
					margin-bottom: 5rem;
				}

				@media screen and (max-width: 414px) {
					.artikel-home {
						padding: 0 2rem;
					}
				}
			`}</style>
			<Head>
				<title>{siteTitle} - Freelance Web Developer</title>
			</Head>

			<section className={`hero `}>
				<div className={`hero-wrapper ${utilStyles.desktopSize}`}>
					<div className="hero-desc">
						<h1>
							Saya Membuat Website Untuk Meningkatkan Prospek Bisnis Anda.
						</h1>
						<p className="hero-intro">
							Hi, saya Nayaka. Jika Anda sedang mencari seorang freelance web
							developer yang mengetahui Wordpress, MERN Stack, dan memiliki
							spesialisasi di Frontend web development, Anda sedang datang ke
							tempat yang tepat.
						</p>
						<p className="hero-benefit">
							<strong>
								{" "}
								Karena bekerja dengan saya, Anda akan mendapatkan:
							</strong>
						</p>
						<ul>
							<div className="hero-list">
								<div className="icon"></div>
								<li>
									Paket komplit seorang fullstack developer yang mampu
									mengerjakan frontend maupun backend pada aplikasi website.
								</li>
							</div>
							<div className="hero-list">
								<div className="icon"></div>
								<li>
									Seseorang yang paham cara memadukan unsur teknis dan marketing
									untuk membangun sebuah website.
								</li>
							</div>
							<div className="hero-list">
								<div className="icon"></div>
								<li>
									Tampilan website yang profesional dan mampu meningkatkan
									prospek bisnis Anda.
								</li>
							</div>
							<div className="hero-list">
								<div className="icon"></div>
								<li>
									Web developer yang berpengalaman menggunakan teknologi seperti
									ReactJS, NextJS, NodeJS, MongoDB dan Wordpress untuk membangun
									website yang memerlukan kustomisasi dan fungsionalitas yang
									kompleks.
								</li>
							</div>
						</ul>
						<div className="hero-button">
							<Link href="/#hire">
								<a>
									<Button
										textColor="var(--secondary-color)"
										bgColor="var(--primary-color)"
									>
										Hire Me
									</Button>
								</a>
							</Link>
							<div className="horizontal-div"></div>
							<Link href="/#work">
								<a>
									<Button
										bgColor="var(--secondary-color)"
										textColor="var(--primary-color)"
										border={true}
									>
										My Work
									</Button>
								</a>
							</Link>

							<div className={"horizontal-div"}></div>
						</div>
					</div>
					<div className="hero-illustration">
						<Image
							priority
							src={photoProfile}
							className={utilStyles.borderCircle}
							height={371}
							width={371}
							alt="Nayaka Yoga Pradipta"
							placeholder="blur"
						/>
					</div>
				</div>
			</section>

			<section className={`service ${utilStyles.desktopSize}`}>
				<div className="service-head">
					<div className={utilStyles.sectionDivider}></div>
					<h2>Apa Yang Dapat Saya Bantu?</h2>
				</div>
				<div className="card-wrapper">
					<Card imgHead="MERN-nayakayp" title="MERN Website Application">
						Saya dapat membuat aplikasi berbasis web dari 0 sampai jadi dengan
						menggunakan teknologi MERN (MongoDB - ExpressJS - ReactJS - NodeJS).
					</Card>
					<Card imgHead="wordpress-nayakayp" title="Wordpress Development">
						Saya memiliki spesialisasi untuk men-design dan membuat theme
						wordpress, optimisasi Wordpress, dan optimisasi SEO pada Wordpress.
					</Card>
					<Card imgHead="website-umkm-nayakayp" title="UKM/UMKM Website">
						Jika Anda baru memulai bisnis dan ingin menawarkan produk atau jasa
						secara digital untuk meningkatkan prospek, saya dapat membantu dalam
						hal ini.
					</Card>
				</div>
			</section>

			<section id="work" className={`web-project ${utilStyles.desktopSize}`}>
				<div className="web-list">
					<h2>Beberapa Pekerjaan Sukses</h2>
					<div className={utilStyles.sectionDivider}></div>
					<ul>
						<li className="portfolio active" data-web="idio">
							<h3>IDIO</h3>
							<p>Platform untuk Podcaster Indonesia</p>
						</li>
						<li className="portfolio" data-web="menjadiperwira">
							<h3>MENJADIPERWIRA</h3>
							<p>Event web profile</p>
						</li>
						<li className="portfolio" data-web="straightaway">
							<h3>STRAIGHTAWAY</h3>
							<p>Small Business Company Profile</p>
						</li>
						<li className="portfolio" data-web="tirtoproyektor">
							<h3>TIRTOPROYEKTOR</h3>
							<p>Rental Proyektor & Ecommerce</p>
						</li>
						<li className="portfolio" data-web="bumigriyamadani">
							<h3>BUMIGRIYAMADANI</h3>
							<p>Property Listing</p>
						</li>
					</ul>
				</div>
				<div className="web-showcase">
					<div className="showcase active">
						<Image
							src="/images/idio.png"
							layout="fill"
							objectFit="contain"
							placeholder="empty"
						></Image>
						<a
							href="https://idio.app"
							target="_blank"
							className="outbound-link"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="ionicon"
								viewBox="0 0 512 512"
							>
								<title>Arrow Redo</title>
								<path
									d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z"
									fill="none"
									stroke="currentColor"
									strokeLinejoin="round"
									strokeWidth="32"
								/>
							</svg>
						</a>
					</div>

					<div className="showcase">
						<Image
							src="/images/menjadiperwira.png"
							layout="fill"
							objectFit="contain"
							placeholder="empty"
						></Image>
						<a
							href="https://menjadiperwira.com"
							target="_blank"
							className="outbound-link"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="ionicon"
								viewBox="0 0 512 512"
							>
								<title>Arrow Redo</title>
								<path
									d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z"
									fill="none"
									stroke="currentColor"
									strokeLinejoin="round"
									strokeWidth="32"
								/>
							</svg>
						</a>
					</div>

					<div className="showcase">
						<Image
							src="/images/straightaway.png"
							layout="fill"
							objectFit="contain"
							placeholder="empty"
						></Image>
						<a
							href="https://straightaway.id"
							target="_blank"
							className="outbound-link"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="ionicon"
								viewBox="0 0 512 512"
							>
								<title>Arrow Redo</title>
								<path
									d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z"
									fill="none"
									stroke="currentColor"
									strokeLinejoin="round"
									strokeWidth="32"
								/>
							</svg>
						</a>
					</div>

					<div className="showcase">
						<Image
							src="/images/tirtoproyektor.png"
							layout="fill"
							objectFit="contain"
							placeholder="empty"
						></Image>
						<a
							href="https://tirtoproyektor.com"
							target="_blank"
							className="outbound-link"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="ionicon"
								viewBox="0 0 512 512"
							>
								<title>Arrow Redo</title>
								<path
									d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z"
									fill="none"
									stroke="currentColor"
									strokeLinejoin="round"
									strokeWidth="32"
								/>
							</svg>
						</a>
					</div>

					<div className="showcase">
						<Image
							src="/images/bumigriyamadani.png"
							layout="fill"
							objectFit="contain"
							placeholder="empty"
						></Image>
						<a
							href="https://bumigriyamadani.com"
							target="_blank"
							className="outbound-link"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="ionicon"
								viewBox="0 0 512 512"
							>
								<title>Arrow Redo</title>
								<path
									d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z"
									fill="none"
									stroke="currentColor"
									strokeLinejoin="round"
									strokeWidth="32"
								/>
							</svg>
						</a>
					</div>

					<ul>
						<div className="bullet active"></div>
						<div className="bullet"></div>
						<div className="bullet"></div>
						<div className="bullet"></div>
						<div className="bullet"></div>
					</ul>
				</div>
			</section>

			<section id="hire" className={`form-wrapper ${utilStyles.desktopSize}`}>
				<h2>Mulai Kerjasama</h2>
				<div className={utilStyles.sectionDivider}></div>
				<p>
					Entah Anda perlu seorang freelance web developer untuk projek website
					atau tidak. Bincang dahulu jangan langsung bayar. Ceritakan saja
					permasalahan yang sedang dihadapi
				</p>
				<Form />
			</section>

			<section className={`artikel-home ${utilStyles.desktopSize}`}>
				<h2>Artikel Publikasi</h2>
				<ul className={utilStyles.list}>
					{allArtikelData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<ArticleList
								id={id}
								date={date}
								title={title}
								excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,"
							/>
						</li>
					))}
				</ul>

				<Link href="/artikel">
					<a>
						<Button
							bgColor="var(--primary-color)"
							textColor="var(--secondary-color)"
						>
							Semua Artikel
						</Button>
					</a>
				</Link>
			</section>
			<Script>
				{`
          websitePortfolio=document.querySelectorAll('.portfolio');
          showCase=document.querySelectorAll('.showcase');
          bullets=document.querySelectorAll('.bullet');

          websitePortfolio.forEach((website,index)=>{
            website.addEventListener('click',()=>{
              selectHighlight(index);
            })
          })

          bullets.forEach((bullet,index)=>{
            bullet.addEventListener('click',()=>{
              selectHighlight(index);
            })
          })

          function selectHighlight(i){
            websitePortfolio.forEach((website,index)=>{
              if(i===index){
                website.classList.add('active');
                showCase[index].classList.add('active');
                bullets[index].classList.add('active');
              }if(i!==index){
                website.classList.remove('active');
                showCase[index].classList.remove('active');
                bullets[index].classList.remove('active');
              }
            })
          }
        `}
			</Script>
		</>
	);
};

export async function getStaticProps() {
	const allArtikelData = getSortedArtikelData();
	return {
		props: {
			allArtikelData,
		},
	};
}

export default Hire;
