import Image from "next/image";
import { Article } from "@/lib/news";

export default function FeaturedStory({
  article,
}: {
  article: Article;
}) {
  return (

<div className="grid lg:grid-cols-2 gap-10 items-center">

<div className="relative h-[420px] rounded-2xl overflow-hidden">

<Image
src={article.image}
alt={article.title}
fill
className="object-cover"
/>

</div>

<div>

<p className="uppercase text-blue-600 font-semibold">
Featured Story
</p>

<h2 className="mt-4 text-4xl font-bold">

{article.title}

</h2>

<p className="mt-6 text-slate-600 leading-relaxed">

{article.summary}

</p>

<button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">

Read Article →

</button>

</div>

</div>

  );
}
