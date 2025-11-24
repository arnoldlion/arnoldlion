import Layout from "@/components/layout";
import styles from "@/components/styles/kitten.module.scss";

import {dmSerifDisplay} from "@/components/fonts";

import {Breadcrumbs} from "@/subitems/breadcrumbs/Breadcrumbs";
import {Intro} from "@/screens/kitten/intro/intro";
import {Gallery} from "@/screens/kitten/gallery/gallery";
import {Descr} from "@/screens/kitten/descr/descr";
import { Registration } from "@/subitems/registration";

export const Kitten =({data})=>{

    const firstSlice = data?.[0]?.primary

    return     <Layout>
        <div className={styles.kitten_content}>
            <Breadcrumbs isSold={firstSlice.status==="Sold"} />
            <h1 className={dmSerifDisplay + " " + styles.kitten_title}>{firstSlice.h1_title}</h1>
            <Intro firstSlice={firstSlice}/>
            <Gallery firstSlice={firstSlice}/>
            <Descr firstSlice={firstSlice}/>
            <div className={styles.kitten_registration}>
                <Registration />
            </div>
        </div>
    </Layout>
}