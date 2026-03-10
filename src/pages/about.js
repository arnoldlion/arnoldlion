import Layout from "@/components/layout";
import styles from "@/components/styles/about.module.scss";
import Head from "next/head";
import {METADATA} from "@/components/meta";
import { dmSerifDisplay } from '@/components/fonts';
import Image from "next/image";
import About1 from "@/images/about/01_about.jpg";
import About2 from "@/images/about/02_about.jpg";
import About3 from "@/images/about/03_about.jpg";


export default function About() {
  return (
    <>
      <Head>
        <title>{ METADATA.titleAbout}</title>
        <meta name="description" content={   METADATA.descriptionAbout}/>
        <meta property="og:image" content={  METADATA.imgAbout}/>
        <meta property="og:title" content={ METADATA.titleAbout}/>
        <meta property="og:description" content={ METADATA.descriptionAbout}/>

      </Head>
      <Layout>
        <div className="content">
          <h1 className={dmSerifDisplay + " " + styles.about_title}>About Us</h1>
          <div className={styles.about_wrap}>
            <div className={styles.about_content}>
              <h2 className={dmSerifDisplay + " " + styles.about_intro_title}>My Story</h2>
              <Image
                src={About1}
                sizes="100%"
                alt=""
                className={styles.about_text_img}
                placeholder="blur"
              />
              <div className={styles.about_text}>
                <p className={styles.about_p}>A little about me and how I got started with my favorite cat breed — it's been a 30-year journey! When I was just 7 years old, my parents got me some guinea pigs. I remember thinking,</p>
                <p className={styles.about_quote}>"If they have babies, that would be so cool — I'd love taking care of them!"</p>
                <p className={styles.about_p}>And sure enough, they did! More and more guinea pigs kept being born, so I started finding loving homes for them and charging a small fee to help support my little guinea pig setup. I didn't have a fancy name for it back then — haha! As the years went by, my love for animals just kept growing.</p>
              </div>
              <Image
                src={About2}
                sizes="100%"
                alt=""
                className={styles.about_text_img}
                placeholder="blur"
              />
            </div>
            <div className={styles.about_content}>
              <h2 className={dmSerifDisplay + " " + styles.about_intro_title}>Arnold</h2>
              <div className={styles.about_text}>
                <p className={styles.about_p}>My very first Maine Coon cat was a big, solid black male I named Arnold. And yeah, the name means something to me — it goes way back to my childhood too. I was obsessed with Arnold Schwarzenegger as a kid — watched Terminator more times than I can count. So when I got this huge, muscular, longhaired black cat with a mane like a lion, the name just fit perfectly. "Schwarz" means black in German, and this guy was a beast — Arnold was the only name that made sense.</p>
              </div>
              <Image
                src={About3}
                sizes="100%"
                alt=""
                className={styles.about_text_img}
                placeholder="blur"
              />
              <div className={styles.about_text}>
                <p className={styles.about_p}>That was back in 2012. He was my best friend. When he passed away, I wanted to do something to honor him — to keep his memory alive. So I named my cattery after him.</p>
                <p className={styles.about_p}>These days, it's not just cats in my house. I've also got two budgies, an African pygmy hedgehog, a tortoise, a hamster, and a Bichon Frisé named Mussy. I love them all — I honestly can't imagine life without my little crew. I've always loved taking care of animals. My friends actually call me Ace Ventura — another one of my favorite actors from when I was a kid!</p>
                <p className={styles.about_p}>And about my cattery logo — that wasn't just random either. Everything I do means something. I'm a creative guy with a huge heart for animals, so every little detail matters.</p>
                <p className={styles.about_p}>Ever notice my logo kind of looks like the Metro-Goldwyn-Mayer logo? You know, the one from Tom and Jerry? I was obsessed with those cartoons as a kid. Back in the '90s, when my parents would leave for a while, they'd pop in a Tom and Jerry VHS tape for me to watch all day. I still remember almost every episode!</p>
                <p className={styles.about_p}>So when I thought about a logo, I pictured my big, maned Maine Coon Arnold's face — hungry and meowing — right in the middle of that famous logo. It just clicked.</p>
                <p className={styles.about_p}>Like I said — everything goes back to my childhood. Every little detail is thought out with love. This is my project. And I'm the one making it happen.</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
