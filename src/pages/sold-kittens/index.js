
import {createClient} from "@/prismicio";
import {Catalog} from "@/components/Catalog";


export default function SoldKittens({cats}) {
  return  <Catalog title={"Sold Kittens"} cats={cats}/>
}

export async function getStaticProps() {
  const client = createClient();
  const pages = await client.getAllByType("cat");
  const filteredPages = pages.map(page => ({
    uuid: page.uid,
    data: page.data.slices
  })).filter((item)=>{
    const info = item?.data?.[0].primary
    return info?.status==="Sold"
  })

  return {
    props: {
      cats: filteredPages,
    },
    revalidate: 120,
  };
}