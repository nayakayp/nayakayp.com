import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Date from "../../components/date";
import { client } from "../../lib/client";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/client";
import { getImageDimensions } from "@sanity/asset-utils";
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
            console.log(props.value);
            return (
                <pre className="relative rounded-lg">
                    <code className="language-javascript text-xs">
                        {props.value.code}
                    </code>
                </pre>
            );
        },
        image: (props) => {
            const { width, height } = getImageDimensions(props.value);
            return (
                <div className="my-4 rounded shadow-xl">
                    <Image
                        src={urlFor(props.value).url()}
                        width={width}
                        height={height}
                    />
                </div>
            );
        },
    },
    block: {
        h2: ({ children }) => (
            <h2 className="my-2 text-3xl font-bold text-dark-400">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="my-2 text-2xl font-bold text-dark-400">
                {children}
            </h3>
        ),
    },
    marks: {
        code: ({ children }) => (
            <code className="rounded bg-stone-200 py-[2px] px-2 text-base">
                {children}
            </code>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc pl-8">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal pl-8">{children}</ol>
        ),
    },
};

export default function Artikel({ postDetail }) {
    const { title, date, content } = postDetail;
    //console.log(content);
    useEffect(() => {
        prism.highlightAll();
    }, []);
    return (
        <div className="">
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
