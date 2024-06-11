import React from 'react';

import styles from "@/components/styles/kitten.module.scss";
import Image from "next/image";
import {useInView} from "react-intersection-observer";

export const Intro = ({firstSlice}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return <div className={styles.kitten_intro}>
        <Image
            src={firstSlice?.img3_desktop?.url}
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.kitten_intro_img}
        />
        <Image
            src={firstSlice?.img2_mobile?.url}
            width={200}
            height={200}
            alt="Kitten Himberry"
            className={styles.kitten_intro_img_mob}
        />
        <div className={styles.kitten_intro_hello + " " + (inView ? `${styles.active}` : "")}>
            <div className={styles.kitten_intro_top}>
                <p className={styles.kitten_intro_text_p}> {firstSlice?.short_description + firstSlice?.gender + firstSlice?.age}</p>
            </div>
            <div ref={ref} className={styles.kitten_intro_bottom}>
                <p className={styles.kitten_intro_price}>${firstSlice?.price}</p>
                <p className={styles.kitten_intro_status + " " + styles?.[STATUSES_CLASSNAMES[firstSlice?.status?.toLowerCase()]]}></p>
            </div>
        </div>
    </div>

};

const STATUSES_CLASSNAMES = {
    "available":"kitten_intro_status_active",
    "reserved":"kitten_intro_status_reserved",
    "sold":"kitten_intro_status_sold",
}