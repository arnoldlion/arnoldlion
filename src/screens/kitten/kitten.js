import Layout from "@/components/layout";
import styles from "@/components/styles/kitten.module.scss";
import {BreadcrumbsAvailableKittens} from "@/subitems/breadcrumbs/available-kittens";
import {dmSerifDisplay} from "@/components/fonts";

import {Descr} from "@/screens/kitten/descr/descr";
import {Gallery} from "@/screens/kitten/gallery/gallery";
import {Intro} from "@/screens/kitten/intro/intro";

export const Kitten =({data})=>{

    const firstSlice = data?.[0]?.primary

    return     <Layout>
        <div className={styles.kitten_content}>
            <BreadcrumbsAvailableKittens />
            <h1 className={dmSerifDisplay + " " + styles.kitten_title}>{firstSlice.h1_title}</h1>
                    <Intro firstSlice={firstSlice}/>
                 <Gallery firstSlice={firstSlice}/>
                <Descr firstSlice={firstSlice}/>
        </div>
    </Layout>
}