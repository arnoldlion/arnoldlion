import Layout from "@/components/layout";
import {dmSerifDisplay} from "@/components/fonts";
import styles from "@/components/styles/kitten.module.scss";

import {CatalogList} from "@/components/CatalogList";

export const Catalog =({cats , title , isSold})=>{
    return   <Layout>
        <h1 className={dmSerifDisplay + " " + styles.title}>{title}</h1>
        <div className="content">
            <CatalogList cats={cats}   isSold={isSold}/>
        </div>
    </Layout>
}
export const STATUSES_CLASSNAMES = {
    "available": "catalog_item_status_active",
    "reserved":"catalog_item_status_reserved",
    "sold":"catalog_item_status_sold",
}