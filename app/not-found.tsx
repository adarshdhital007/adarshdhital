import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Error 404",
};

export default function NotFound() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 text-center">
      <h1 className="font-bold text-3xl mb-6">
        404 - This Page is Under an Invisibility Cloak
      </h1>
      <p className="mb-4 text-lg">
        Either you&apos;ve taken a wrong turn at Platform 9¾, or this page was
        hit with a Disillusionment Charm.
      </p>
      <p className="mb-6">
        Don&apos;t worry, even Dumbledore gets lost sometimes.
      </p>
      <a
        href="/"
        className="inline-block mt-4 px-6 py-3 bg-rose-700 text-white rounded hover:bg-rose-800 transition"
      >
        This isn&apos;t Hogwarts, Let&apos;s Get Outta Here
      </a>
    </section>
  );
}
