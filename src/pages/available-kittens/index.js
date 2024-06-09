import Layout from "@/components/layout";
import { dmSerifDisplay } from '@/components/fonts';
import Link from 'next/link';
import Image from "next/image";
import styles from "@/components/styles/kitten.module.scss";


export default function AvailableKittens() {
  return (
    <Layout>
      <h1 className={dmSerifDisplay + " " + styles.title}>Available kittens</h1>
      <div className={styles.catalog_items}>
        <Link href="/kittens/himberry" className={styles.catalog_item}>
          <Image
            src="/images/kittens/himberry/00_himberry.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.catalog_item_img}
          />
          <div className={styles.catalog_item_top}>
            <p className={styles.catalog_item_price}>$600</p>
          </div>
          <div className={styles.catalog_item_bottom}>
            <p className={styles.catalog_item_p}>Male</p>
            <p className={styles.catalog_item_p + " " + styles.catalog_item_age}>12 weeks</p>
            <p className={styles.catalog_item_status + " " + styles.catalog_item_status_active}></p>
            {/* <p className={styles.catalog_item_status + " " + styles.catalog_item_status_reserved}></p> */}
          </div>
        </Link>
        <Link href="/kittens/himberry" className={styles.catalog_item}>
          <Image
            src="/images/kittens/himberry3/00_himberry3.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.catalog_item_img}
          />
          <div className={styles.catalog_item_top}>
            <p className={styles.catalog_item_price}>$500</p>
          </div>
          <div className={styles.catalog_item_bottom}>
            <p className={styles.catalog_item_p}>Male</p>
            <p className={styles.catalog_item_p + " " + styles.catalog_item_age}>2 months</p>
            <p className={styles.catalog_item_status + " " + styles.catalog_item_status_reserved}></p> 
          </div>
        </Link>
        <Link href="/kittens/himberry" className={styles.catalog_item}>
          <Image
            src="/images/kittens/himberry4/00_himberry4.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.catalog_item_img}
          />
          <div className={styles.catalog_item_top}>
            <p className={styles.catalog_item_price}>$1300</p>
          </div>
          <div className={styles.catalog_item_bottom}>
            <p className={styles.catalog_item_p}>Male</p>
            <p className={styles.catalog_item_p + " " + styles.catalog_item_age}>6 weeks</p>
            <p className={styles.catalog_item_status + " " + styles.catalog_item_status_active}></p>
          </div>
        </Link>
        <Link href="/kittens/himberry" className={styles.catalog_item}>
          <Image
            src="/images/kittens/himberry5/00_himberry5.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.catalog_item_img}
          />
          <div className={styles.catalog_item_top}>
            <p className={styles.catalog_item_price}>$700</p>
          </div>
          <div className={styles.catalog_item_bottom}>
            <p className={styles.catalog_item_p}>Female</p>
            <p className={styles.catalog_item_p + " " + styles.catalog_item_age}>2 weeks</p>
            <p className={styles.catalog_item_status + " " + styles.catalog_item_status_reserved}></p>
          </div>
        </Link>
        <Link href="/kittens/himberry" className={styles.catalog_item}>
          <Image
            src="/images/kittens/himberry6/00_himberry6.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.catalog_item_img}
          />
          <div className={styles.catalog_item_top}>
            <p className={styles.catalog_item_price}>$1200</p>
          </div>
          <div className={styles.catalog_item_bottom}>
            <p className={styles.catalog_item_p}>Male</p>
            <p className={styles.catalog_item_p + " " + styles.catalog_item_age}>6 months</p>
            <p className={styles.catalog_item_status + " " + styles.catalog_item_status_reserved}></p>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
