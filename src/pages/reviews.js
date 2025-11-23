import styles from "@/components/styles/reviews.module.scss";
import Layout from "@/components/layout";
import Head from "next/head";
import {METADATA} from "@/components/meta";
import Image from "next/image";
import Fancybox from "@/components/fancybox.js";
import { dmSerifDisplay } from '@/components/fonts';

import Reviews1 from "@/images/reviews/01_reviews.jpg"
import Reviews2 from "@/images/reviews/02_reviews.jpg"
import Reviews3 from "@/images/reviews/03_reviews.jpg"
import Reviews4 from "@/images/reviews/04_reviews.jpg"
import Reviews5 from "@/images/reviews/05_reviews.jpg"
import Reviews6 from "@/images/reviews/06_reviews.jpg"
import Reviews7 from "@/images/reviews/07_reviews.jpg"
import Reviews8 from "@/images/reviews/08_reviews.jpg"
import Reviews9 from "@/images/reviews/09_reviews.jpg"
import Reviews10 from "@/images/reviews/10_reviews.jpg"
import Reviews11 from "@/images/reviews/11_reviews.jpg"
import Reviews12 from "@/images/reviews/12_reviews.jpg"
import Reviews13 from "@/images/reviews/13_reviews.jpg"
import Reviews14 from "@/images/reviews/14_reviews.jpg"
import Reviews15 from "@/images/reviews/15_reviews.jpg"
import Reviews16 from "@/images/reviews/16_reviews.jpg"
import Reviews17 from "@/images/reviews/17_reviews.jpg"
import Reviews18 from "@/images/reviews/18_reviews.jpg"
import Reviews19 from "@/images/reviews/19_reviews.jpg"
import Reviews20 from "@/images/reviews/20_reviews.jpg"
import Reviews21 from "@/images/reviews/21_reviews.jpg"
import Reviews22 from "@/images/reviews/22_reviews.jpg"
import Reviews23 from "@/images/reviews/23_reviews.jpg"
import Reviews24 from "@/images/reviews/24_reviews.jpg"
import Reviews25 from "@/images/reviews/25_reviews.jpg"
import Reviews26 from "@/images/reviews/26_reviews.jpg"
import Reviews27 from "@/images/reviews/27_reviews.jpg"
import Reviews28 from "@/images/reviews/28_reviews.jpg"
import Reviews29 from "@/images/reviews/29_reviews.jpg"
import Reviews30 from "@/images/reviews/30_reviews.jpg"
import Reviews31 from "@/images/reviews/31_reviews.jpg"
import Reviews32 from "@/images/reviews/32_reviews.jpg"
import Reviews33 from "@/images/reviews/33_reviews.jpg"
import Reviews34 from "@/images/reviews/34_reviews.jpg"
import Reviews35 from "@/images/reviews/35_reviews.jpg"
import Reviews36 from "@/images/reviews/36_reviews.jpg"
import Reviews37 from "@/images/reviews/37_reviews.jpg"


export default function Reviews() {
  return (
    <>
      <Head>
        <title>{ METADATA.titleDoc}</title>
        <meta name="description" content={   METADATA.descriptionDiplom}/>
        <meta property="og:image" content={  METADATA.imgDiplom}/>
        <meta property="og:title" content={ METADATA.titleDiplom}/>
        <meta property="og:description" content={ METADATA.descriptionDiplom}/>
      </Head>
      <Layout>
        <div className="content">
          <h1 className={dmSerifDisplay + " " + styles.reviews_intro_title}>Reviews</h1>
          <a href="https://www.facebook.com/groups/734815114264815/permalink/1316628429416811/?mibextid=wwXIfr&rdid=6NmY6i8IBDtgBqpP#" target="_blank" className={styles.reviews_social_link}>Look reviews on Facebook</a>
          <Fancybox>
            <div className={styles.reviews_grid}>
              <a href="/images/reviews/01_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews1}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/02_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews2}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/03_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews3}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/04_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews4}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/05_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews5}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/06_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews6}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/07_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews7}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/08_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews8}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/09_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews9}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/10_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews10}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/11_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews11}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/12_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews12}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/13_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews13}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/14_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews14}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/15_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews15}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/16_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews16}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/17_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews17}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/18_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews18}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/19_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews19}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/20_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews20}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/21_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews21}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/22_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews22}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/23_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews23}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/24_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews24}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/25_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews25}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/26_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews26}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/27_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews27}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/28_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews28}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/29_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews29}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/30_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews30}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/31_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews31}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/32_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews32}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/33_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews33}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/34_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews34}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/35_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews35}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/36_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews36}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/reviews/37_reviews.jpg" className={styles.reviews_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Reviews37}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.reviews_item_img}
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
