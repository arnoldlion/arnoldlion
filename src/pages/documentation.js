import styles from "@/components/styles/about.module.scss";
import Layout from "@/components/layout";
import Head from "next/head";
import {METADATA} from "@/components/meta";
import { dmSerifDisplay } from '@/components/fonts';


export default function Documentation() {
  return (
    <>
      <Head>
        <title>{ METADATA.titleDoc}</title>
        <meta name="description" content={   METADATA.descriptionDoc}/>
        <meta property="og:image" content={  METADATA.imgDoc}/>
        <meta property="og:title" content={ METADATA.titleDoc}/>
        <meta property="og:description" content={ METADATA.descriptionDoc}/>

      </Head>
      <Layout>
        <div className="content">
          <h1 className={dmSerifDisplay + " " + styles.about_title}>Documentation</h1>
          <div className={styles.about_text}>
            <p className={styles.about_p}>The Maine Coon is a long-haired cat. The coat is soft and silky, the texture may vary depending on the coat color and breed type. The length of the hair on the head and shoulders is shorter, on the stomach and sides it is longer, and some cats have a developed decorative mane on the neck.</p>
            <p className={styles.about_p}>Like many native breeds, the Maine Coons can be of any color typical of ordinary domestic cats, but artificial colors that indicate possible admixture of other breeds, such as chocolate, lavender, color point or tipping, are not accepted in all federations. For example, color point in Maine Coon colors is accepted only by TICA. The most common pattern in the breed is the brown and smoky tabby, known in Russia as the “wild” color.</p>
          </div>
        </div>
      </Layout>
    </>
  );
}
