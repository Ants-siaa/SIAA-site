export interface Article {
  id: number;
  title: string;
  summary: string;
  category: string;
  image: string;
  source: string;
  date: string;
  url: string;
  featured?: boolean;
}

export const articles: Article[] = [

{
  id:1,
  title:"Australia expands semiconductor manufacturing capability",
  summary:"New investment is strengthening Australia's sovereign semiconductor ecosystem through advanced manufacturing and research collaboration.",
  category:"Manufacturing",
  image:"/images/news/manufacturing.jpg",
  source:"SIAA Intelligence",
  date:"10 July 2026",
  url:"#",
  featured:true
},

{
  id:2,
  title:"Photonics research accelerates AI data centres",
  summary:"Integrated photonics continues to improve data transfer speeds while reducing energy consumption.",
  category:"Photonics",
  image:"/images/news/photonics.jpg",
  source:"Photonics",
  date:"9 July 2026",
  url:"#"
},

{
  id:3,
  title:"Compound semiconductor demand continues to grow",
  summary:"GaN and SiC technologies are increasingly being adopted across EV and defence applications.",
  category:"Compound Semiconductors",
  image:"/images/news/compound.jpg",
  source:"Industry",
  date:"9 July 2026",
  url:"#"
},

{
  id:4,
  title:"Australian chip designers expand global partnerships",
  summary:"Several Australian design companies are collaborating with international foundries.",
  category:"Chip Design",
  image:"/images/news/chip-design.jpg",
  source:"SIAA",
  date:"8 July 2026",
  url:"#"
},

{
  id:5,
  title:"Government announces advanced manufacturing initiative",
  summary:"New funding aims to strengthen Australia's semiconductor capability.",
  category:"Government",
  image:"/images/news/government.jpg",
  source:"Government",
  date:"8 July 2026",
  url:"#"
}

];
