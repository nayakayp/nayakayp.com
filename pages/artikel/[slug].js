import { useEffect } from "react";
import Head from "next/head";
import Date from "../../components/date";
import { client } from "../../lib/client";
import { PortableText } from "@portabletext/react";
import styles from "./[Slug].module.css";
import "prismjs/themes/prism-tomorrow.css";

const prism = require("prismjs");
require("prismjs/components/prism-python");

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
        code: (props) => {
            console.log(props);
            return (
                <pre className="relative rounded-lg">
                    <code className="language-javascript">
                        {props.value.code}
                    </code>
                </pre>
            );
        },
    },
};

export default function Artikel({ postDetail }) {
    const { title, date, content } = postDetail;
    console.log(content);
    useEffect(() => {
        prism.highlightAll();
    }, []);
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

                {/*<pre className="relative">
                    <code className="language-javascript">{``}</code>
                </pre>*/}
                <div className="articleBody text-lg">
                    <PortableText value={content} components={components} />
                </div>
            </article>
        </div>
    );
}
