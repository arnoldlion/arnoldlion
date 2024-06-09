import styles from "./breadcrumbs.module.scss";
import Link from 'next/link';


export const BreadcrumbsAvailableKittens = () => {
  return (
    <div className={styles.breadcrumbs}>
      <Link href="/available-kittens" className={styles.breadcrumbs_link}>Available kittens</Link>
    </div>
  );
}
