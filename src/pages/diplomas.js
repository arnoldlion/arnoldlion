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
          {/* <div className={styles.about_text}>
            <p className={styles.about_p}>The Maine Coon is a long-haired cat. The coat is soft and silky, the texture may vary depending on the coat color and breed type. The length of the hair on the head and shoulders is shorter, on the stomach and sides it is longer, and some cats have a developed decorative mane on the neck.</p>
            <p className={styles.about_p}>Like many native breeds, the Maine Coons can be of any color typical of ordinary domestic cats, but artificial colors that indicate possible admixture of other breeds, such as chocolate, lavender, color point or tipping, are not accepted in all federations. For example, color point in Maine Coon colors is accepted only by TICA. The most common pattern in the breed is the brown and smoky tabby, known in Russia as the “wild” color.</p>
          </div> */}
          <Fancybox>
            <div className={styles.diplomas_grid}>
              <a href="/images/diplomas/01_diploma.jpg" className={styles.diplomas_link}
                data-fancybox="gallery"
                >
                <Image
                  src={Diploma1}
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
                  width={400}
                  height={400}
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
