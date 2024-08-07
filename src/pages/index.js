import styles from "@/components/styles/index.module.scss";
import Layout from "@/components/layout";
import { dmSerifDisplay } from '@/components/fonts';
import {createClient} from "@/prismicio";
import { Diplomas } from "@/subitems/diplomas/index.js";
import Link from 'next/link';

import {CatalogList} from "@/components/CatalogList";
import Head from "next/head";
import {METADATA} from "@/components/meta";
import Image from "next/image";
import Fur from "@/images/fur.jpg";
import FurMob from "@/images/fur_mob.jpg";


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
                    <div className={styles.index_intro}>
                        <div className={styles.index_intro_text}>
                            <h1 className={dmSerifDisplay + " " + styles.index_intro_title}>Arnold Lion Cattery</h1>
                            <p className={styles.index_intro_p}>Luxury high quality Maine coons are here! We have references and reviews. We breed Maine coons for 12 years already!</p>
                        </div>
                        <Image
                            src={Fur}
                            sizes="100%"
                            alt=""
                            className={styles.index_intro_img}
                            placeholder="blur"
                        />
                        <Image
                            src={FurMob}
                            sizes="100%"
                            alt=""
                            className={styles.index_intro_img_mob}
                            placeholder="blur"
                        />
                    </div>
                    <div className={styles.index_catalog}>
                        <h2 className={dmSerifDisplay + " " + styles.index_diplomas_title}>Available kittens</h2>
                        <CatalogList cats={cats}/>
                        <Link href="/available-kittens" className={styles.index_link}>Show more</Link>
                    </div>
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