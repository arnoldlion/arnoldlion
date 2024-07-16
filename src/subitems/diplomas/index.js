import styles from "./diplomas.module.scss";
import Image from "next/image";
import Link from 'next/link';
import Diploma1 from "@/images/diplomas/01_diploma.jpg"
import Diploma2 from "@/images/diplomas/02_diploma.jpg"
import Diploma3 from "@/images/diplomas/03_diploma.jpg"
import Diploma4 from "@/images/diplomas/04_diploma.jpg"


export const Diplomas = () => {
  return (
    <div className={styles.diplomas_grid}>
      <div className={styles.diplomas_item}>
        <Image
          src={Diploma1}
          width={400}
          height={400}
          alt=""
          className={styles.diplomas_item_img}
          placeholder = "blur"
        />
      </div>
      <div className={styles.diplomas_item}>
      <Image
          src={Diploma2}
          width={400}
          height={400}
          alt=""
          className={styles.diplomas_item_img}
          placeholder = "blur"
        />
      </div>
      <div className={styles.diplomas_item}>
        <Image
          src={Diploma3}
          width={400}
          height={400}
          alt=""
          className={styles.diplomas_item_img}
          placeholder = "blur"
        />
      </div>
      <div className={styles.diplomas_item}>
        <Image
          src={Diploma4}
          width={400}
          height={400}
          alt=""
          className={styles.diplomas_item_img}
          placeholder = "blur"
        />
      </div>
      <Link href="/diplomas" className={styles.diplomas_item_cup}>
        <p className={styles.diplomas_item_cup_p}>Show more</p>
      </Link>
      <div className={styles.diplomas_cup_mob}></div>
    </div>
  );
}