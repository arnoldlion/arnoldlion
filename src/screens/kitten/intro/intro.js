import React from 'react';

import styles from "@/components/styles/kitten.module.scss";
import Image from "next/image";
import {useInView} from "react-intersection-observer";

export const Intro = ({firstSlice}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const isSold =firstSlice.status==="Sold"
    return <div className={styles.kitten_intro + (isSold ? " " + styles.kitten_intro_sold : "")}>
        <div className={styles.kitten_intro_imgs}>
            <Image
                src={firstSlice?.img3_desktop?.url}
                width={400}
                height={400}
                alt={firstSlice?.img3_desktop?.alt}
                className={styles.kitten_intro_img}
            />
            <Image
                src={firstSlice?.img2_mobile?.url}
                width={400}
                height={400}
                alt={firstSlice?.img2_mobile?.alt}
                className={styles.kitten_intro_img_mob}
            />
        </div>
        <div className={styles.kitten_intro_hello + " " + (inView ? `${styles.active}` : "")}>
            <div className={styles.kitten_intro_wrap}>
                <div className={styles.kitten_intro_top}>
                    <p className={styles.kitten_intro_text_p}> {firstSlice?.short_description  }</p>
                </div>
                {!isSold&&<div className={styles.kitten_intro_middle}>
                    <div className={styles.kitten_intro_middle_prices}>
                        <p className={styles.kitten_intro_price}>Pet: ${firstSlice?.pet_price}</p>
                        <p className={styles.kitten_intro_price}>Breed: ${firstSlice?.breed_price}</p>
                    </div>
                    <div className={styles.kitten_intro_conditions}>
                        <p className={styles.kitten_intro_conditions_p + " " + styles.kitten_intro_conditions_p1}>Delivery charges are paid separately from the kitten’s cost</p>
                        <p className={styles.kitten_intro_conditions_p + " " + styles.kitten_intro_conditions_p2}>We send additional photos and videos of the kitten and its parents</p>
                        <p className={styles.kitten_intro_conditions_p + " " + styles.kitten_intro_conditions_p3}>We FaceTime our kittens</p>
                    </div>
                </div>}
                <div ref={ref} className={styles.kitten_intro_bottom}>
                    <p className={styles.kitten_intro_status + " " + styles?.[STATUSES_CLASSNAMES[firstSlice?.status?.toLowerCase()]]}></p>
                </div>
            </div>
            
        </div>
    </div>

};

const STATUSES_CLASSNAMES = {
    "available":"kitten_intro_status_active",
    "reserved":"kitten_intro_status_reserved",
    "sold":"kitten_intro_status_sold",
}