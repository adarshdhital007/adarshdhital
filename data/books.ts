import { BookCardProps } from "app/components/BookCard";

export const recommendedBooks: BookCardProps[] = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "/images/books/atomic-habits.jpg",
    description:
      "Tiny changes, remarkable results. Learn how to build good habits and break bad ones.",
    rating: 4.8,
    categories: ["Self-Improvement", "Psychology"],
    link: "https://jamesclear.com/atomic-habits",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    cover: "/images/books/clean-code.jpg",
    description:
      "A handbook of agile software craftsmanship that has helped countless programmers write better code.",
    rating: 4.7,
    categories: ["Programming", "Software Development"],
    link: "https://www.goodreads.com/book/show/3735293-clean-code",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    cover: "/images/books/pragmatic-programmer.jpg",
    description:
      "Practical advice for software engineers looking to improve their craft and career.",
    rating: 4.8,
    categories: ["Programming", "Career"],
    link: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover: "/images/books/thinking-fast-slow.jpg",
    description:
      "A profound exploration of the two systems that drive the way we think and make decisions.",
    rating: 4.6,
    categories: ["Psychology", "Decision Making"],
    link: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow",
  },
];

export const currentlyReading: BookCardProps[] = [
  {
    title: "System Design Interview",
    author: "Alex Xu",
    cover: "/images/books/system-design.jpg",
    description:
      "A comprehensive guide to designing systems that can handle large volumes of data.",
    progress: 65,
    categories: ["System Design", "Databases"],
    link: "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "/images/books/atomic-habits.jpg",
    description:
      "Tiny changes, remarkable results. Learn how to build good habits and break bad ones.",
    rating: 4.8,
    progress: 100,
    categories: ["Self-Improvement", "Psychology"],
    link: "https://jamesclear.com/atomic-habits",
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    cover: "/images/books/power-of-habit.jpg",
    description:
      "Tiny changes, remarkable results. Learn how to build good habits and break bad ones.",
    rating: 4.8,
    progress: 100,
    categories: ["Self-Improvement", "Psychology"],
    link: "https://www.goodreads.com/book/show/12609433-the-power-of-habit",
  },
];

const books = {
  recommendedBooks,
  currentlyReading,
};

export default books;
