import styles from "./social-media.module.scss";


export const SocialMedia = () => {
  return (
    <div className={styles.social_links}>
      <a href="https://www.facebook.com/groups/734815114264815" target="_blank" className={styles.social_link + " " + styles.social_link_fb}>Facebook</a>
      <a href="https://www.instagram.com/arnoldlioncattery/" target="_blank" className={styles.social_link + " " + styles.social_link_insta}>Instagram</a>
      <a href="https://www.tiktok.com/@arnold.lion" target="_blank" className={styles.social_link + " " + styles.social_link_tiktok}>TikTok</a>
    </div>
  );
}