import { dmSerifDisplay } from '@/components/fonts';
import Image from "next/image";
import styles from "./registration.module.scss";
import RegistrationImg from "@/images/registration_img.jpg";


export const Registration = () => {
  return (
    <div className={styles.registration}>
      <div>
        <Image
          src={RegistrationImg}
          sizes="100%"
          alt=""
          className={styles.registration_img}
          placeholder="blur"
        />
      </div>
      <div className={styles.registration_right}>
        <h2 className={dmSerifDisplay + " " + styles.registration_title}>WCF-Cattery-Registration</h2>
        <div className={styles.registration_text}>
          <p className={styles.registration_text_p}>Zwingername / cattery: Arnold Lion</p>
          <p className={styles.registration_text_p}>Züchter / breeder: Maksimov, Artur</p>
          <p className={styles.registration_text_p}>Anschrift / adress: October avenue 53-176 246029 Gomel</p>
          <p className={styles.registration_text_p}>Land / country: Belarus</p>
          <p className={styles.registration_text_p}>Verein / club: AFC KotoMur</p>
          <p className={styles.registration_text_p}>BY-0290</p>
          <p className={styles.registration_text_p}>Datum / date: 29.01.2019</p>
        </div>
      </div>
    </div>
  );
}