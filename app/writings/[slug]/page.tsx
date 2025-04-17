import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";
import Link from "next/link";
import NotFound from "@/app/not-found";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedDate: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${metaData.baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${metaData.baseUrl}/writings/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    return (
      <NotFound
        title="404 - The Page You Seek Is a Blank Scroll"
        message="It seems this piece of writing has vanished like ink in the rain."
        subtext="No tales to read here, but there are many other stories still waiting for you."
        buttonText="Return to the Library of Writings"
        buttonHref="/writings"
      />
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-4">
      {/* {post.coverImage && (
          <div className="mb-8 relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )} */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">{post.metadata.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.metadata.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <time className="text-neutral-600 dark:text-neutral-400 text-sm">
          {new Date(post.metadata.publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>

      <article className="prose dark:prose-invert max-w-none">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
