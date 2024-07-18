import styles from "@/components/styles/kitten.module.scss";
import Link from "next/link";
import Image from "next/image";
import {STATUSES_CLASSNAMES} from "@/components/Catalog";

export const CatalogList =({cats ,  isSold})=> {
    return <div className={styles.catalog_items + " " + (isSold ? styles.catalog_sold_items : " ")}>
        {
            cats?.map((cat, i) => {

                const info = cat?.data?.[0]?.primary
                const isSold = info?.status === "Sold"
                if (!info) {
                    return <Fragment key={i}> no info </Fragment>
                }
                return <Link key={i} href={"/kittens/" + cat.uuid} className={styles.catalog_item}>
                    <Image
                        src={info?.img1_catlog?.url}
                        width={200}
                        height={200}
                        alt={info?.img1_catlog?.alt}
                        className={styles.catalog_item_img}
                    />
                    {!isSold && <div className={styles.catalog_item_top}>
                        <p className={styles.catalog_item_price}>${info?.price || 0}</p>
                    </div>}
                    <div className={styles.catalog_item_bottom}>
                        {!isSold && <p className={styles.catalog_item_p}>{info.gender}</p>}
                        {!isSold && <p className={styles.catalog_item_p + " " + styles.catalog_item_age}>{info.age}</p>}

                        {/* <p className={styles.catalog_item_status + " " + styles.catalog_item_status_reserved}></p> */}
                        <p className={styles.catalog_item_status + " " + styles?.[STATUSES_CLASSNAMES[info?.status?.toLowerCase()]]}></p>

                    </div>
                </Link>
            })
        }

    </div>
}