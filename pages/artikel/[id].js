import Head from "next/head";
import Date from "../../components/date";
import { ArticleCTA, Layout } from "../../components";
import utilStyles from "../../styles/utils.module.css";
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
    <Layout>
      <style jsx>{`
        .root {
        }
        h3 {
          font-size: 3.6rem;
          font-weight: 600;
        }
        .content {
          padding: 6rem 0;
          max-width: 70rem;
        }
        .date {
          margin: 1rem 0 4rem 0;
          font-size: 1.6rem;
        }
        @media screen and (max-width: 414px) {
          .content {
            width: 100%;
            padding: 6rem 2rem;
          }
          h3 {
            font-size: 3rem;
            line-height: 3rem;
          }
        }
      `}</style>
      <Head>
        <title>{artikelData.title}</title>
      </Head>
      <article className={`content ${utilStyles.desktopSize}`}>
        <h3>{artikelData.title}</h3>
        <p className="date">
          <Date dateString={artikelData.date} />
        </p>
        <div dangerouslySetInnerHTML={{ __html: artikelData.contentHtml }} />
      </article>
      <ArticleCTA />
    </Layout>
  );
}
