import Head from "next/head";
import { notFound } from "next/navigation";

import { createClient } from "@/prismicio";

import {Kitten} from "@/screens/kitten/kitten";
import {METADATA} from "@/components/meta";

export default function Page({ page }) {
    if (!page) {
        notFound();
    }

    return (
        <>
            <Head>
                <title>{page?.data?.meta_title ||METADATA.title}</title>
                <meta name="description" content={page?.data?.meta_description ||METADATA.description}/>
                <meta property="og:image" content={page?.data?.meta_image?.url ||METADATA.img}/>
                <meta property="og:title" content={page?.data?.meta_title ||METADATA.title}/>
                <meta property="og:description" content={page?.data?.meta_description ||METADATA.description}/>

            </Head>
            <Kitten data={page.data.slices}/>
        </>
    );
}

export async function getStaticProps({params}) {

    const client = createClient();
    const page = await client.getByUID("cat", params.uid).catch(() => null);

    if (!page) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            page,
        },
        revalidate: 120, // пересобираем страницу каждые 120 секунд
    };
}

export async function getStaticPaths() {
    const client = createClient();
    const pages = await client.getAllByType("cat");

    const paths = pages.map((page) => ({
        params: { uid: page.uid },
    }));

    return {
        paths,
        fallback: 'blocking', // поддержка инкрементальной статической регенерации
    };
}
