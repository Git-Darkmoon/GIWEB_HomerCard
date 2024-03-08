import Image from "next/image";
import IdText from "~/components/IdText";
import type { character } from "~/types/Character";

const characterInfo: character = {
  name: "Homer Simpson",
  nationality: "Mexicana",
  dateOfIssue: "20 March",
  Authority: "Mexico",
};

export default function HomePage() {
  return (
    <main className="grid min-h-screen w-full place-items-center bg-gradient-to-br from-indigo-300 to-red-100">
      <article className="rounded-md bg-white/40 px-16 py-4 shadow-md transition-all hover:scale-105 hover:shadow-xl">
        <h1 className="py-3 text-center text-4xl font-semibold tracking-widest text-slate-900">
          {" "}
          MEXICO
        </h1>
        <section className="flex items-center justify-center gap-6">
          {/* AVATAR */}
          <Image
            src={"/homer.webp"}
            alt="Homer hipster"
            width={300}
            height={450}
            className="h-72 w-52 rounded-md"
          />

          {/* DESCRIPTION */}
          <div className="flex flex-col gap-4">
            <IdText area="name" content={characterInfo.name} />
            <IdText area="nationality" content={characterInfo.nationality} />
            <IdText area="date of issue" content={characterInfo.dateOfIssue} />
            <IdText area="authority" content={characterInfo.Authority} />
          </div>
        </section>
      </article>
    </main>
  );
}
