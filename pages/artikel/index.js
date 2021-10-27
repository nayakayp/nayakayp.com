import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Layout, { siteTitle } from "../../components/layout";
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Semua Artikel</h2>
        <ul className={utilStyles.list}>
          {allArtikelData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
