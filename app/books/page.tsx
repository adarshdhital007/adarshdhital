import { Metadata } from "next";
import BookCard from "app/components/BookCard";
import GradientText from "app/components/GradientText";
import PageHero from "app/components/PageHero";
import Section from "app/components/Section";
import { currentlyReading } from "data/books";

export const metadata: Metadata = {
  title: "Books | Adarsh Dhital Khatri",
  description:
    "These books have helped shape the way I think, build, and live. This list isn’t exhaustive — just a handful that left a lasting impression, from software and creativity to personal growth.",
  alternates: {
    canonical: `https://adarshkhatri.com.np/books`,
  },
};

export default function BooksPage() {
  return (
    <main>
      <PageHero
        subtitle="Reading List"
        title={
          <>
            Books I <GradientText>Recommend</GradientText>
          </>
        }
        description="These books have helped shape the way I think, build, and live. This list isn’t exhaustive — just a handful that left a lasting impression, from software and creativity to personal growth."
      />

      {/* Currently Reading Section */}
      <Section className="!pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentlyReading.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </Section>
    </main>
  );
}
