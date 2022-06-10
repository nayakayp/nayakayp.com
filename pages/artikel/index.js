import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { Layout, ArticleList } from "../../components";
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
    <Layout>
      <Head>
        <title>Artikel - {siteTitle}</title>
      </Head>

      <style jsx>{`
        .root {
          padding: 6rem 0;
        }
        h1 {
          margin-bottom: 3rem;
        }
        @media screen and (max-width: 414px) {
          .root {
            padding: 6rem 2rem;
          }
        }
      `}</style>
      <section className={`root ${utilStyles.desktopSize}`}>
        <div className="header ">
          <h1>Semua Artikel</h1>
          <div className={utilStyles.sectionDivider}></div>
        </div>
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
      </section>
    </Layout>
  );
}
