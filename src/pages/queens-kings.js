import Layout from "@/components/layout";
import styles from "@/components/styles/queens.module.scss";
import Head from "next/head";
import {METADATA} from "@/components/meta";
import Image from "next/image";
import Fancybox from "@/components/fancybox.js";
import { dmSerifDisplay } from '@/components/fonts';

import Queens1 from "@/images/queens-kings/01_our_queens_kings.jpg"
import Queens2 from "@/images/queens-kings/02_our_queens_kings.jpg"
import Queens3 from "@/images/queens-kings/03_our_queens_kings.jpg"
import Queens4 from "@/images/queens-kings/04_our_queens_kings.jpg"
import Queens5 from "@/images/queens-kings/05_our_queens_kings.jpg"
import Queens6 from "@/images/queens-kings/06_our_queens_kings.jpg"
import Queens7 from "@/images/queens-kings/07_our_queens_kings.jpg"


export default function Queens() {
  return (
    <>
      <Head>
        <title>{ METADATA.titleQueens}</title>
        <meta name="description" content={   METADATA.descriptionQueens}/>
        <meta property="og:image" content={  METADATA.imgQueens}/>
        <meta property="og:title" content={ METADATA.titleQueens}/>
        <meta property="og:description" content={ METADATA.descriptionQueens}/>
      </Head>
      <Layout>
        <div className="content">
          <h1 className={dmSerifDisplay + " " + styles.queens_intro_title}>Queens and Kings</h1>
          <div className={styles.queens_intro_description}>
            <div className={styles.queens_intro_description_text}>
              <p className={styles.queens_intro_description_p}>Our cattery takes great pride in our five exceptional female cats. Each one is the embodiment of the breed's standard—powerful, healthy, and stunningly beautiful. These magnificent Maine Coons are the cornerstone of our breeding program, and between them, they have produced numerous litters of healthy, vibrant kittens that have brought joy to families across the country. We carefully plan each pairing to ensure their offspring inherit the finest qualities: luxurious coats, strong bone structure, wonderful personalities, and of course, their magnificent colors.</p>
              <p className={styles.queens_intro_description_p}>Each of our queens is truly one-of-a-kind. As you can see from their photos, they showcase a stunning spectrum of coat patterns, from a classic black marble and a delicate smoke to a sunny red and an elegant tortoiseshell. These cats are much more to us than just breeders; they are beloved members of our family, receiving endless affection and the best care possible.</p>
            </div>
          </div>
          <h2 className={dmSerifDisplay + " " + styles.queens_title}>Kings</h2>
          <Fancybox>
            <div className={styles.kings_grid}>
              <a href="/images/queens-kings/06_our_queens_kings.jpg" className={styles.queens_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Queens6}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.queens_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/queens-kings/07_our_queens_kings.jpg" className={styles.queens_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Queens7}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.queens_item_img}
                  placeholder="blur"
                />
              </a>
            </div>
            <h2 className={dmSerifDisplay + " " + styles.queens_title}>Queens</h2>
            <div className={styles.queens_grid}>
              <a href="/images/queens-kings/01_our_queens_kings.jpg" className={styles.queens_link + " " + styles.queens_link1}
                data-fancybox="gallery"
                >
                <Image
                  src={Queens1}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.queens_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/queens-kings/02_our_queens_kings.jpg" className={styles.queens_link + " " + styles.queens_link2}
                data-fancybox="gallery"
                >
                <Image
                  src={Queens2}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.queens_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/queens-kings/03_our_queens_kings.jpg" className={styles.queens_link + " " + styles.queens_link3}
                data-fancybox="gallery"
                >
                <Image
                  src={Queens3}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.queens_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/queens-kings/04_our_queens_kings.jpg" className={styles.queens_link + " " + styles.queens_link4}
                data-fancybox="gallery"
                >
                <Image
                  src={Queens4}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.queens_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/queens-kings/05_our_queens_kings.jpg" className={styles.queens_link + " " + styles.queens_link5}
                data-fancybox="gallery"
                >
                <Image
                  src={Queens5}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.queens_item_img}
                  placeholder="blur"
                />
              </a>
            </div>
          </Fancybox>
        </div>
      </Layout>
    </>
  );
}
