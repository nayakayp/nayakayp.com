import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Button, Layout } from "../components";
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
    <Layout>
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
        <title>{siteTitle} - Web Developer</title>
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
    </Layout>
  );
};

export default Home;
