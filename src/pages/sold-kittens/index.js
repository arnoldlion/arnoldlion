
import {createClient} from "@/prismicio";
import {Catalog} from "@/components/Catalog";


export default function SoldKittens({cats}) {

  return  <Catalog title={"Sold Kittens"} cats={cats} isSold={true}/>
}

export async function getStaticProps() {
  const client = createClient();
  const pages = await client.getAllByType("cat");
  const filteredPages = pages.map(page => ({
    uuid: page.uid,
    data: page.data.slices,
    last_publication_date:page?.last_publication_date
  })).filter((item)=>{
    const info = item?.data?.[0].primary
    return info?.status==="Sold"
  }).sort((a,b)=>{
    const first =new Date(a.last_publication_date ).getTime()
    const second =new Date(b.last_publication_date ).getTime()
    return  second-first
  })

  return {
    props: {
      cats: filteredPages,
    },
    revalidate: 120,
  };
}