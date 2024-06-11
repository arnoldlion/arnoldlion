import React from 'react';

import styles from "@/components/styles/kitten.module.scss";
import Image from "next/image";

export const Gallery = ({firstSlice}) => {
    return <div className={styles.kitten_gallery}>
        {firstSlice?.gallery?.map((photo,i)=>{

            return     <Image
                key={i}
                src={photo?.gallery_img?.url}
                width={200}
                height={200}
                alt="Kitten Himberry"
                className={styles.kitten_gallery_img}
            />
        })}

    </div>
};