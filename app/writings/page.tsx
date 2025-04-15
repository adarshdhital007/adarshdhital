import { Metadata } from "next";
import { getBlogPosts } from "app/lib/posts";
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "app/components/Card";
import CardGrid from "app/components/CardGrid";
import GradientText from "app/components/GradientText";
import PageHero from "app/components/PageHero";
import Tag from "app/components/Tag";

export const metadata: Metadata = {
  title: "Writings | Adarsh Dhital Khatri",
  description:
    "Read the latest writings by Adarsh Dhital Khatri, exploring various topics and insights.",
  alternates: {
    canonical: `https://adarshkhatri.com.np/writings`,
  },
};

export default function BlogPosts() {
  let posts = getBlogPosts();

  return (
    <main>
      <PageHero
        className="!pb-0"
        subtitle="My Writings"
        title={
          <>
            Thoughts on{" "}
            <GradientText className="">Development & Design</GradientText>
          </>
        }
        description="I write about web development, system architecture, and improving developer experience. Here you'll find practical guides, in-depth articles, and insights from my experience."
      />

      <section className="!pt-0 !pb-2 max-w-4xl mx-auto px-4">
        <CardGrid columns={2} gap="lg">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Card
                key={post.slug}
                variant="default"
                href={`/writings/${post.slug}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl mb-1">
                    {post.metadata.title}
                  </CardTitle>
                  <CardDescription>
                    {new Date(post.metadata.publishedDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm sm:text-base line-clamp-3">
                    {post.metadata.excerpt}
                  </p>
                  <div className="-ml-1 flex flex-wrap justify-between items-center gap-2">
                    <div className="flex flex-wrap gap-1">
                      {post.metadata.tags?.map((tag) => (
                        <Tag
                          key={tag}
                          variant="subtle"
                          color={"green"}
                          size="sm"
                        >
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </div>
                  {/* <span className="mt-2 text-xs sm:text-sm font-medium flex items-center text-blue-600 dark:text-blue-400 whitespace-nowrap">
                    Read article <ArrowRight className="ml-1 h-3 w-3" />
                  </span> */}
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-neutral-500 dark:text-neutral-400">
                No posts yet. I&apos;m working on some great content - check
                back soon!
              </p>
            </div>
          )}
        </CardGrid>
      </section>
    </main>
  );
}
