import Layout from "@/components/layout";
import { dmSerifDisplay } from '@/components/fonts';
import Image from "next/image";
import styles from "@/components/styles/kitten.module.scss";
import { BreadcrumbsAvailableKittens } from '@/subitems/breadcrumbs/available-kittens.js';
import { useInView } from "react-intersection-observer";


export default function Himberry1() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <Layout>
      <div className={styles.kitten_content}>
        <BreadcrumbsAvailableKittens />
        <h1 className={dmSerifDisplay + " " + styles.kitten_title}>Himberry Arnold Lion</h1>
        <div className={styles.kitten_intro}>
          <Image
            src="/images/kittens/himberry/01_himberry.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.kitten_intro_img}
          />
          <Image
            src="/images/kittens/himberry/02_himberry.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.kitten_intro_img_mob}
          />
          <div className={styles.kitten_intro_hello + " " + (inView? `${styles.active}` : "")}>
            <div className={styles.kitten_intro_top}>
              <p className={styles.kitten_intro_text_p}>Joanna Arnold Lion, female, 8 weeks. Colour mco ns 22.</p>
            </div>
            <div ref={ref} className={styles.kitten_intro_bottom}>
              <p className={styles.kitten_intro_status + " " + styles.kitten_intro_status_sold}></p>
            </div>
          </div>
        </div>
        <div className={styles.kitten_gallery}>
          <Image
            src="/images/kittens/himberry/02_himberry.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.kitten_gallery_img}
          />
          <Image
            src="/images/kittens/himberry/03_himberry.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.kitten_gallery_img}
          />
          <Image
            src="/images/kittens/himberry/04_himberry.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.kitten_gallery_img}
          />
          <Image
            src="/images/kittens/himberry/05_himberry.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.kitten_gallery_img}
          />
          <Image
            src="/images/kittens/himberry/06_himberry.jpg"
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.kitten_gallery_img}
          />
        </div>
        <div className={styles.kitten_descr}>
          <h2 className={dmSerifDisplay + " " + styles.kitten_descr_title}>Description</h2>
          <div className={styles.kitten_descr_text}>
            <p className={styles.kitten_descr_text_p}>The Maine Coon is a long-haired cat. The coat is soft and silky, the texture may vary depending on the coat color and breed type. The length of the hair on the head and shoulders is shorter, on the stomach and sides it is longer, and some cats have a developed decorative mane on the neck.</p>
            <p className={styles.kitten_descr_text_p}>Maine Coons can be of any color typical of ordinary domestic cats, but artificial colors that indicate possible admixture of other breeds, such as chocolate, lavender, color point or tipping, are not accepted in all federations. For example, color point in Maine Coon colors is accepted only by TICA. The most common pattern in the breed is the brown and smoky tabby, known in Russia as the “wild” color.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
