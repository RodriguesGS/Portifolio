import type { GetStaticPropsContext } from "next";
import { loadMessages } from "@/lib/messages";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />

    </main>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return { props: { messages: await loadMessages(locale) } };
}