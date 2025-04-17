import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "Error 404",
};

type Props = {
  title?: string;
  message?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function NotFound({
  title = "404 - This Page is Under an Invisibility Cloak",
  message = "You’ve taken a wrong turn at Platform 9¾, or this page was hit with a Disillusionment Charm.",
  subtext = "Don’t worry, even Dumbledore gets lost sometimes.",
  buttonText = "This isn’t Hogwarts, Let’s Get Outta Here",
  buttonHref = "/",
}: Props) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 text-center">
      <h1 className="font-bold text-3xl mb-6">{title}</h1>
      <p className="mb-4 text-lg">{message}</p>
      <p className="mb-6">{subtext}</p>
      <Link
        href={buttonHref}
        className="inline-block mt-4 px-6 py-3 bg-rose-700 text-white rounded hover:bg-rose-800 transition"
      >
        {buttonText}
      </Link>
    </section>
  );
}
