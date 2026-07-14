import StoryCard from "@/components/StoryCard";

interface Story {
  title: string;
  summary: string;
  href: string;
  category?: string;
  date?: string;
}

interface IntelligenceCategoryProps {
  id: string;
  icon: string;
  title: string;
  description?: string;
  stories: Story[];
}

export default function IntelligenceCategory({
  id,
  icon,
  title,
  description,
  stories,
}: IntelligenceCategoryProps) {
  return (
    <section id={id} className="py-16 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-10">

          <div className="flex items-center gap-3">

            <span className="text-3xl">{icon}</span>

            <h2 className="text-3xl font-bold">
              {title}
            </h2>

          </div>

          {description && (
            <p className="mt-4 text-lg text-slate-600 max-w-4xl">
              {description}
            </p>
          )}

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {stories.map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              summary={story.summary}
              href={story.href}
              category={story.category}
              date={story.date}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
