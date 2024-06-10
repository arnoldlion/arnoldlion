import Head from "next/head";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import {Kitten} from "@/screens/kitten/kitten";

export default function Page({ page }) {
    if (!page) {
        notFound();
    }

    return (
        <>
            <Head>
                <title>{page.data.meta_title}</title>
                <meta name="description" content={page.data.meta_description} />
            </Head>
            <Kitten data={page.data.slices}  />
        </>
    );
}

export async function getStaticProps({ params }) {

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
