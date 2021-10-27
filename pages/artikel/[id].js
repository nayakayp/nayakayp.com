import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllArtikelIds, getArtikelData } from "../../lib/artikel";

export async function getStaticProps({ params }) {
  const artikelData = await getArtikelData(params.id);
  // console.log(artikelData);
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
  console.log(artikelData);
  return (
    <Layout>
      <Head>
        <title>{artikelData.title}</title>
      </Head>
      <article>
        <h3>{artikelData.id}</h3>
        <Date dateString={artikelData.date} />
        <div dangerouslySetInnerHTML={{ __html: artikelData.contentHtml }} />
      </article>
    </Layout>
  );
}
