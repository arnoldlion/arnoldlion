import styles from "@/components/styles/index.module.scss";
import Layout from "@/components/layout";
import { dmSerifDisplay } from '@/components/fonts';
import {createClient} from "@/prismicio";
import { Diplomas } from "@/subitems/diplomas/index.js";

import {CatalogList} from "@/components/CatalogList";
import Head from "next/head";
import {METADATA} from "@/components/meta";


export default function Home({cats}) {
    return (
        <>
            <Head>
                <title>{ METADATA.titleHome}</title>
                <meta name="description" content={   METADATA.descriptionHome}/>
                <meta property="og:image" content={  METADATA.imgHome}/>
                <meta property="og:title" content={ METADATA.titleHome}/>
                <meta property="og:description" content={ METADATA.descriptionHome}/>

            </Head>
            <Layout>
                <div className="content">
                    <h1 className={dmSerifDisplay + " " + styles.index_title}>Home</h1>
                    <div className={styles.index_text}>
                        <p className={styles.index_p}>The Maine Coon is a long-haired cat. The coat is soft and silky, the texture may vary depending on the coat color and breed type. The length of the hair on the head and shoulders is shorter, on the stomach and sides it is longer, and some cats have a developed decorative mane on the neck.</p>
                        <p className={styles.index_p}>Like many native breeds, the Maine Coons can be of any color typical of ordinary domestic cats, but artificial colors that indicate possible admixture of other breeds, such as chocolate, lavender, color point or tipping, are not accepted in all federations. For example, color point in Maine Coon colors is accepted only by TICA. The most common pattern in the breed is the brown and smoky tabby, known in Russia as the “wild” color.</p>
                    </div>
                    <CatalogList cats={cats}/>
                    <div className={styles.index_diplomas}>
                        <h2 className={dmSerifDisplay + " " + styles.index_diplomas_title}>Our diplomas</h2>
                        <Diplomas />
                    </div>
                </div>
            </Layout>
        </>
    );
}


export async function getStaticProps() {
    const client = createClient();
    const pages = await client.getAllByType("cat");
    const filteredPages = pages.map(page => ({
        uuid: page.uid,
        data: page.data.slices,
        last_publication_date:page?.last_publication_date
    })).filter((item)=>{
        const info = item?.data?.[0].primary
        return info?.status!=="Sold"
    }).sort((a,b)=>{
        const first =new Date(a.last_publication_date ).getTime()
        const second =new Date(b.last_publication_date ).getTime()
        return  second-first
    }).slice(0 ,3 )

    return {
        props: {
            cats: filteredPages,
        },
        revalidate: 120,
    };
}