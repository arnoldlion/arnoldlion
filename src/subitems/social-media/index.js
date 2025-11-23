import styles from "./social-media.module.scss";


export const SocialMedia = () => {
  return (
    <div className={styles.social_linkss}>
      <a href="https://www.facebook.com/groups/734815114264815" target="_blank" className={styles.social_links + " " + styles.social_links_fb}>Facebook</a>
      <a href="https://www.instagram.com/arnoldlioncattery/" target="_blank" className={styles.social_links + " " + styles.social_links_insta}>Instagram</a>
      <a href="https://www.tiktok.com/@arnold.lion" target="_blank" className={styles.social_links + " " + styles.social_links_tiktok}>TikTok</a>
    </div>
  );
}