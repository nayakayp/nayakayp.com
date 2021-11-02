import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Button from "./ui/component-button";

export const siteTitle = "Nayaka Yoga Pradipta";

export default function Layout({ children, home }) {
  return (
    <>
      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 10vh;
          background: var(--light-background);
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
        }
        a,
        p {
          color: var(--primary-text-color);
          font-weight: 500;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        nav ul {
          display: flex;
          align-items: center;
        }
        nav li {
          margin-left: 3rem;
          text-transform: uppercase;
        }
        footer {
          margin-top: 6rem;
          min-height: 30vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--light-background);
          filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.05));
        }
        .footer-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .social {
          margin-bottom: 4rem;
        }
        .social a {
          margin: 0 3rem;
        }
        footer p {
          font-size: 1.4rem;
        }

        main {
          min-height: 60vh;
        }
        .hamburger {
          display: none;
        }
        @media screen and (max-width: 414px) {
          nav {
            position: fixed;
          }
          nav ul {
            display: none;
          }
          nav ul.active {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 999;
            min-height: 100vh;
            width: 100%;
            background: var(--light-background);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          nav li {
            margin-bottom: 1rem;
            margin-left: 0;
          }
          .hamburger {
            display: initial;
            cursor: pointer;
            z-index: 1000;
          }
          .hamburger .line {
            height: 0.5rem;
            width: 3rem;
            background: var(--primary-color);
            margin-bottom: 0.5rem;
          }
          footer svg {
            width: 5rem;
            height: 5rem;
          }
        }
      `}</style>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
        <nav className={utilStyles.desktopSize}>
          <Link href="/">
            <a id="logo">
              <img src="/images/nayaka-logo.png" alt="Logo Nayaka" />
            </a>
          </Link>
          <div
            className="hamburger"
            onClick={() =>
              document.querySelector("ul").classList.toggle("active")
            }
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul>
            <li>
              <Link href="/profil">
                <a>Profil</a>
              </Link>
            </li>
            <li>
              <Link href="/artikel">
                <a>Artikel</a>
              </Link>
            </li>
            <li>
              <Link href="/#hire">
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
        </nav>
      </header>
      <main>{children}</main>

      <footer>
        <div className={`footer-wrapper ${utilStyles.desktopSize}`}>
          <div className="social">
            <a href="https://instagram.com/nayakayp" target="_blank">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_187:565)">
                  <path
                    d="M29.9919 19.9954C24.4833 19.9954 19.9879 24.4908 19.9879 29.9994C19.9879 35.5081 24.4833 40.0035 29.9919 40.0035C35.5006 40.0035 39.996 35.5081 39.996 29.9994C39.996 24.4908 35.5006 19.9954 29.9919 19.9954ZM59.9967 29.9994C59.9967 25.8567 60.0342 21.7515 59.8015 17.6163C59.5689 12.8132 58.4732 8.55035 54.9608 5.03804C51.441 1.51823 47.1857 0.430013 42.3826 0.19736C38.2399 -0.0352925 34.1347 0.0022323 29.9994 0.0022323C25.8567 0.0022323 21.7515 -0.0352925 17.6163 0.19736C12.8132 0.430013 8.55035 1.52573 5.03804 5.03804C1.51823 8.55785 0.430013 12.8132 0.19736 17.6163C-0.0352925 21.759 0.0022323 25.8642 0.0022323 29.9994C0.0022323 34.1347 -0.0352925 38.2474 0.19736 42.3826C0.430013 47.1857 1.52573 51.4485 5.03804 54.9608C8.55785 58.4807 12.8132 59.5689 17.6163 59.8015C21.759 60.0342 25.8642 59.9967 29.9994 59.9967C34.1422 59.9967 38.2474 60.0342 42.3826 59.8015C47.1857 59.5689 51.4485 58.4732 54.9608 54.9608C58.4807 51.441 59.5689 47.1857 59.8015 42.3826C60.0417 38.2474 59.9967 34.1422 59.9967 29.9994ZM29.9919 45.3921C21.4738 45.3921 14.5993 38.5175 14.5993 29.9994C14.5993 21.4813 21.4738 14.6068 29.9919 14.6068C38.51 14.6068 45.3845 21.4813 45.3845 29.9994C45.3845 38.5175 38.51 45.3921 29.9919 45.3921ZM46.015 17.5713C44.0262 17.5713 42.4201 15.9652 42.4201 13.9764C42.4201 11.9876 44.0262 10.3816 46.015 10.3816C48.0038 10.3816 49.6098 11.9876 49.6098 13.9764C49.6104 14.4487 49.5178 14.9164 49.3374 15.3528C49.1569 15.7892 48.8922 16.1858 48.5582 16.5197C48.2243 16.8536 47.8278 17.1184 47.3914 17.2988C46.9549 17.4793 46.4872 17.5719 46.015 17.5713Z"
                    fill="#0C2C38"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_187:565">
                    <rect width="60" height="59.9989" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://github.com/nayakayp" target="_blank">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30 0C13.425 0 0 13.425 0 30C0 43.275 8.5875 54.4875 20.5125 58.4625C22.0125 58.725 22.575 57.825 22.575 57.0375C22.575 56.325 22.5375 53.9625 22.5375 51.45C15 52.8375 13.05 49.6125 12.45 47.925C12.1125 47.0625 10.65 44.4 9.375 43.6875C8.325 43.125 6.825 41.7375 9.3375 41.7C11.7 41.6625 13.3875 43.875 13.95 44.775C16.65 49.3125 20.9625 48.0375 22.6875 47.25C22.95 45.3 23.7375 43.9875 24.6 43.2375C17.925 42.4875 10.95 39.9 10.95 28.425C10.95 25.1625 12.1125 22.4625 14.025 20.3625C13.725 19.6125 12.675 16.5375 14.325 12.4125C14.325 12.4125 16.8375 11.625 22.575 15.4875C24.975 14.8125 27.525 14.475 30.075 14.475C32.625 14.475 35.175 14.8125 37.575 15.4875C43.3125 11.5875 45.825 12.4125 45.825 12.4125C47.475 16.5375 46.425 19.6125 46.125 20.3625C48.0375 22.4625 49.2 25.125 49.2 28.425C49.2 39.9375 42.1875 42.4875 35.5125 43.2375C36.6 44.175 37.5375 45.975 37.5375 48.7875C37.5375 52.8 37.5 56.025 37.5 57.0375C37.5 57.825 38.0625 58.7625 39.5625 58.4625C45.5179 56.4518 50.6929 52.6242 54.3592 47.5184C58.0254 42.4126 59.9982 36.2857 60 30C60 13.425 46.575 0 30 0Z"
                  fill="#0C2C38"
                />
              </svg>
            </a>
            <a href="https://linkedin.com/in/nayakayp" target="_blank">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4.2975C0 1.92375 1.9725 0 4.40625 0H55.5938C58.0275 0 60 1.92375 60 4.2975V55.7025C60 58.0762 58.0275 60 55.5938 60H4.40625C1.9725 60 0 58.0762 0 55.7025V4.2975ZM18.5362 50.2275V23.1338H9.5325V50.2275H18.5362ZM14.0363 19.4325C17.175 19.4325 19.1287 17.355 19.1287 14.7525C19.0725 12.0938 17.1788 10.0725 14.0963 10.0725C11.0138 10.0725 9 12.0975 9 14.7525C9 17.355 10.9537 19.4325 13.9762 19.4325H14.0363ZM32.4412 50.2275V35.0963C32.4412 34.2863 32.5012 33.4763 32.7412 32.8988C33.39 31.2825 34.8713 29.6063 37.3613 29.6063C40.62 29.6063 41.9212 32.0887 41.9212 35.7337V50.2275H50.925V34.6875C50.925 26.3625 46.485 22.4925 40.56 22.4925C35.7825 22.4925 33.6412 25.1175 32.4412 26.9662V27.06H32.3813C32.4012 27.0287 32.4212 26.9974 32.4412 26.9662V23.1338H23.4412C23.5537 25.6763 23.4412 50.2275 23.4412 50.2275H32.4412Z"
                  fill="#0C2C38"
                />
              </svg>
            </a>
          </div>
          <p>
            Copyright © 2021 <strong>Nayaka Yoga Pradipta.</strong>
          </p>
        </div>
      </footer>
    </>
  );
}
