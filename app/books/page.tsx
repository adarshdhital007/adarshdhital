import { Metadata } from "next";
import BookCard from "app/components/BookCard";
import GradientText from "app/components/GradientText";
import PageHero from "app/components/PageHero";
import Section from "app/components/Section";
import { currentlyReading } from "data/books";

export const metadata: Metadata = {
  title: "Books | Adarsh Dhital Khatri",
  description:
    "Explore the books that Adarsh Dhital Khatri is currently reading and has completed.",
  alternates: {
    canonical: `https://adarshkhatri.com.np/books`,
  },
};

export default function BooksPage() {
  return (
    <main>
      <PageHero
        className="!pb-8 [&>div>p:first-of-type]:mb-0"
        subtitle="Reading List"
        title={
          <>
            Books I <GradientText>Recommend</GradientText>
          </>
        }
        description="Books have played a vital role in shaping my thinking and growth. Here's a curated list of books that have had a profound impact on me, covering software development, personal growth, and more."
      />

      {/* Currently Reading Section */}
      <Section title="Currently Reading" className="!pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentlyReading.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </Section>
    </main>
  );
}
