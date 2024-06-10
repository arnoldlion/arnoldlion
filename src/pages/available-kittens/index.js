import Layout from "@/components/layout";
import { dmSerifDisplay } from '@/components/fonts';
import Link from 'next/link';
import Image from "next/image";
import styles from "@/components/styles/kitten.module.scss";
import {useEffect} from "react";
import { createClient } from "@/prismicio";

export default function AvailableKittens({cats}) {


  return (
    <Layout>
      <h1 className={dmSerifDisplay + " " + styles.title}>Available kittens</h1>
      <div className={styles.catalog_items}>
        {
          cats.map((cat, i )=>{
            console.log(cat)
            const info = cat?.data?.[0]?.primary
            if(!info){
              return  <> no info </>
            }
            return  <Link href={"/kittens/" + cat.uuid} className={styles.catalog_item}>
              <Image
                  src={info?.img1_catlog?.url}
                  width={200}
                  height={200}
                  alt="Kitten Himberry"
                  className={styles.catalog_item_img}
              />
              <div className={styles.catalog_item_top}>
                <p className={styles.catalog_item_price}>${info?.price||0}</p>
              </div>
              <div className={styles.catalog_item_bottom}>
                <p className={styles.catalog_item_p}>Male</p>
                <p className={styles.catalog_item_p + " " + styles.catalog_item_age}>12 weeks</p>
                <p className={styles.catalog_item_status + " " + styles.catalog_item_status_active}></p>
                {/* <p className={styles.catalog_item_status + " " + styles.catalog_item_status_reserved}></p> */}
              </div>
            </Link>
          })
         }

      </div>
    </Layout>
  );
}


export async function getStaticProps() {
  const client = createClient();
  const pages = await client.getAllByType("cat");

  const filteredPages = pages.map(page => ({
    uuid: page.uid,
    data: page.data.slices
  }));

  return {
    props: {
      cats: filteredPages,
    },
    revalidate: 120,
  };
}