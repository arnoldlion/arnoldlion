import React from 'react';

import styles from "@/components/styles/kitten.module.scss";
import {dmSerifDisplay} from "@/components/fonts";

export const Descr = ({firstSlice}) => {
    console.log(firstSlice)
    const html = firstSlice?.html_description
    return <div className={styles.kitten_descr}>
        <div dangerouslySetInnerHTML={{__html:html}}/>
    </div>
};