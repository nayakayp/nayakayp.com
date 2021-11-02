import Image from "next/image";

export default function ComponentCTAArtikel() {
  return (
    <div className="root">
      <style jsx>{`
        .root {
          max-width: 108rem;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          background: var(--light-background);
          padding: 4rem 10rem;
          border-radius: 0.5rem;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));
        }
        h3 {
          font-size: 2.8rem;
          font-weight: 600;
        }
        .image-wrapper {
          flex: 1 1 20rem;
        }
        .cta-info {
          flex: 1 1 43.3rem;
        }
        .cta-social {
          flex: 1 1 16.6rem;
        }
        p,
        a {
          font-size: 1.8rem;
          font-weight: 400;
        }
        a {
          color: var(--accent-color);
        }
        a:hover {
          color: var(--primary-color);
        }
        p {
          max-width: 43.3rem;
        }
        li {
          margin-bottom: 1rem;
        }
        @media screen and (max-width: 414px) {
          .root {
            width: 90%;
            margin: 0 auto;
            padding: 3rem 2rem;
          }
          .cta-info {
            margin: 2rem 0;
          }
        }
      `}</style>
      <div className="image-wrapper">
        <Image
          src="/images/nayaka-photo-cta.png"
          height={155}
          width={155}
          alt="Nayaka Yoga Pradipta"
        ></Image>
      </div>
      <div className="cta-info">
        <h3>Penulis</h3>
        <p>
          Artikel ini ditulis oleh Nayaka. Seorang freelance web developer yang
          sangat passionate pada dunia teknologi dan bisnis
        </p>
      </div>
      <div className="cta-social">
        <ul>
          <li>
            <a href="https://twitter.com/nayakayp" target="_blank">
              Follow di Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com/nayakayp" target="_blank">
              Follow di Instagram
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/nayakayp" target="_blank">
              Connect di Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
