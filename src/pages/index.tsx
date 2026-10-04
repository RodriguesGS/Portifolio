import type { GetStaticPropsContext } from "next";
import { loadMessages } from "@/lib/messages";

export default function Home() {
  return (
    <main className="flex-1">
      
    </main>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return { props: { messages: await loadMessages(locale) } };
}