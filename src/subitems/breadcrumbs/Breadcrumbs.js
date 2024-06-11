import styles from "./breadcrumbs.module.scss";
import Link from 'next/link';


export const Breadcrumbs = ({isSold}) => {
  return (
    <div className={styles.breadcrumbs}>
      <Link href={isSold?"/sold-kittens":"/available-kittens"}className={styles.breadcrumbs_link}>{isSold?"Sold": "Available"} kittens</Link>
    </div>
  );
}
