import React from 'react';

import styles from "@/components/styles/kitten.module.scss";
import {dmSerifDisplay} from "@/components/fonts";

export const Descr = ({firstSlice}) => {

    const html = firstSlice?.html_description
    return <div className={styles.kitten_descr}>
        <h2 className={dmSerifDisplay + " " + styles.kitten_descr_title}>Description</h2>
        <div dangerouslySetInnerHTML={{__html:html}}/>
    </div>
};