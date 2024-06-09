import Layout from "@/components/layout";
import { dmSerifDisplay } from '@/components/fonts';
import Link from 'next/link';
import Image from "next/image";
import styles from "@/components/styles/kitten.module.scss";


export default function SoldKittens() {
  return (
    <Layout>
      <h1 className={dmSerifDisplay + " " + styles.title}>Sold kittens</h1>
      <div className={styles.catalog_items + " " + styles.catalog_sold_items}>
        <Link href="/kittens/himberry-1" className={styles.catalog_item}>
          <Image
            src="/images/kittens/himberry/00_himberry.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.catalog_item_img}
          />
          <div className={styles.catalog_item_bottom}>
            <p className={styles.catalog_item_status + " " + styles.catalog_item_status_sold}></p>
          </div>
        </Link>
        <Link href="/kittens/himberry-1" className={styles.catalog_item}>
          <Image
            src="/images/kittens/himberry3/00_himberry3.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.catalog_item_img}
          />
          <div className={styles.catalog_item_bottom}>
            <p className={styles.catalog_item_status + " " + styles.catalog_item_status_sold}></p>
          </div>
        </Link>
        <Link href="/kittens/himberry-1" className={styles.catalog_item}>
          <Image
            src="/images/kittens/himberry4/00_himberry4.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.catalog_item_img}
          />
          <div className={styles.catalog_item_bottom}>
            <p className={styles.catalog_item_status + " " + styles.catalog_item_status_sold}></p>
          </div>
        </Link>
        <Link href="/kittens/himberry-1" className={styles.catalog_item}>
          <Image
            src="/images/kittens/himberry5/00_himberry5.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.catalog_item_img}
          />
          <div className={styles.catalog_item_bottom}>
            <p className={styles.catalog_item_status + " " + styles.catalog_item_status_sold}></p>
          </div>
        </Link>
        <Link href="/kittens/himberry-1" className={styles.catalog_item}>
          <Image
            src="/images/kittens/himberry6/00_himberry6.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.catalog_item_img}
          />
          <div className={styles.catalog_item_bottom}>
            <p className={styles.catalog_item_status + " " + styles.catalog_item_status_sold}></p>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
