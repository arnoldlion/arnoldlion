import Layout from "@/components/layout";
import styles from "@/components/styles/faq.module.scss";
import Head from "next/head";
import {METADATA} from "@/components/meta";
import { dmSerifDisplay } from '@/components/fonts';
import { FaqIndex } from "@/subitems/faq/index";


export default function Faq() {
  return (
    <>
      <Head>
        <title>{ METADATA.titleFaq}</title>
        <meta name="description" content={   METADATA.descriptionFaq}/>
        <meta property="og:image" content={  METADATA.imgFaq}/>
        <meta property="og:title" content={ METADATA.titleFaq}/>
        <meta property="og:description" content={ METADATA.descriptionFaq}/>

      </Head>
      <Layout>
      <div className="content">
        <h1 className={dmSerifDisplay + " " + styles.faq_title}>FAQ</h1>
          <FaqIndex />
        </div>
      </Layout>
    </>
  );
}
