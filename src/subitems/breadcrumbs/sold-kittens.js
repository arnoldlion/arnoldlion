import styles from "./breadcrumbs.module.scss";
import Link from 'next/link';


export const BreadcrumbsSoldKittens = () => {
  return (
    <div className={styles.breadcrumbs}>
      <Link href="/sold-kittens" className={styles.breadcrumbs_link}>Sold kittens</Link>
    </div>
  );
}
