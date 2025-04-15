import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";
import Link from "next/link";

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
      <main className="p-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 p-4 rounded-lg">
            <h1 className="text-xl font-bold mb-2">Post not found</h1>
            <p>
              The post you&apos;re looking for doesn&apos;t exist or has been
              removed.
            </p>
            <Link
              href="/writings"
              className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to Writings
            </Link>
          </div>
        </div>
      </main>
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
