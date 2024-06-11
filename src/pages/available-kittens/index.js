import Layout from "@/components/layout";
import { dmSerifDisplay } from '@/components/fonts';
import Link from 'next/link';
import Image from "next/image";
import styles from "@/components/styles/kitten.module.scss";
import {Fragment, useEffect} from "react";
import { createClient } from "@/prismicio";
import {Catalog} from "@/components/Catalog";

export default function AvailableKittens({cats}) {
  return  <Catalog title={"Available kittens"} cats={cats}/>
}



export async function getStaticProps() {
  const client = createClient();
  const pages = await client.getAllByType("cat");
  const filteredPages = pages.map(page => ({
    uuid: page.uid,
    data: page.data.slices
  })).filter((item)=>{
    const info = item?.data?.[0].primary
    return info?.status!=="Sold"
  })

  return {
    props: {
      cats: filteredPages,
    },
    revalidate: 120,
  };
}