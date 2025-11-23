import styles from "@/components/styles/diplomas.module.scss";
import Layout from "@/components/layout";
import Head from "next/head";
import {METADATA} from "@/components/meta";
import Image from "next/image";
import Fancybox from "@/components/fancybox.js";
import { dmSerifDisplay } from '@/components/fonts';
import Diploma1 from "@/images/diplomas/01_diploma.jpg"
import Diploma2 from "@/images/diplomas/02_diploma.jpg"
import Diploma3 from "@/images/diplomas/03_diploma.jpg"
import Diploma4 from "@/images/diplomas/04_diploma.jpg"
import Diploma5 from "@/images/diplomas/05_diploma.jpg"
import Diploma6 from "@/images/diplomas/06_diploma.jpg"
import Diploma7 from "@/images/diplomas/07_diploma.jpg"
import Diploma8 from "@/images/diplomas/08_diploma.jpg"
import Diploma9 from "@/images/diplomas/09_diploma.jpg"
import Diploma10 from "@/images/diplomas/10_diploma.jpg"
import Diploma11 from "@/images/diplomas/11_diploma.jpg"
import Diploma12 from "@/images/diplomas/12_diploma.jpg"
import Diploma13 from "@/images/diplomas/13_diploma.jpg"
import Diploma14 from "@/images/diplomas/14_diploma.jpg"
import Diploma15 from "@/images/diplomas/15_diploma.jpg"
import Diploma16 from "@/images/diplomas/16_diploma.jpg"
import Diploma17 from "@/images/diplomas/17_diploma.jpg"
import Diploma18 from "@/images/diplomas/18_diploma.jpg"
import Diploma19 from "@/images/diplomas/19_diploma.jpg"
import Diploma20 from "@/images/diplomas/20_diploma.jpg"
import Diploma21 from "@/images/diplomas/21_diploma.jpg"
import Diploma22 from "@/images/diplomas/22_diploma.jpg"
import Diploma23 from "@/images/diplomas/23_diploma.jpg"
import Diploma24 from "@/images/diplomas/24_diploma.jpg"
import Diploma25 from "@/images/diplomas/25_diploma.jpg"
import Diploma26 from "@/images/diplomas/26_diploma.jpg"
import Diploma27 from "@/images/diplomas/27_diploma.jpg"
import Diploma28 from "@/images/diplomas/28_diploma.jpg"
import Diploma29 from "@/images/diplomas/29_diploma.jpg"
import Diploma30 from "@/images/diplomas/30_diploma.jpg"
import Diploma31 from "@/images/diplomas/31_diploma.jpg"
import Diploma32 from "@/images/diplomas/32_diploma.jpg"
import Diploma33 from "@/images/diplomas/33_diploma.jpg"
import Diploma34 from "@/images/diplomas/34_diploma.jpg"
import Diploma35 from "@/images/diplomas/35_diploma.jpg"
import Diploma36 from "@/images/diplomas/36_diploma.jpg"
import Diploma37 from "@/images/diplomas/37_diploma.jpg"


export default function Diplomas() {
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
          <h1 className={dmSerifDisplay + " " + styles.diploma_title}>Our diplomas</h1>
          <Fancybox>
            <div className={styles.diplomas_grid}>
              <a href="/images/diplomas/01_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma1}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/02_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma2}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/03_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma3}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/04_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma4}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/05_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma5}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/06_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma6}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/07_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma7}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/08_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma8}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/09_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma9}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/10_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma10}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/11_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma11}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/12_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma12}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/13_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma13}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/14_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma14}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/15_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma15}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/16_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma16}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/17_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma17}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/18_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma18}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/19_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma19}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/20_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma20}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/21_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma21}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/22_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma22}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/23_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma23}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/24_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma24}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/25_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma25}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/26_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma26}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/27_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma27}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/28_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma28}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/29_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma29}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/30_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma30}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/31_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma31}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/32_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma32}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/33_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma33}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/34_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma34}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/35_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma35}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/36_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma36}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
                  placeholder="blur"
                />
              </a>
              <a href="/images/diplomas/37_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma37}
                  sizes="(max-width: 768px) 41.1vw, (max-width: 1520px) 18.65vw, 283px"
                  alt=""
                  className={styles.diplomas_item_img}
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
