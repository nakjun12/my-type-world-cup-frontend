import Cards from "@/components/main/Cards";
import SearchBar from "@/components/main/SearchBar";
import SortButtons from "@/components/main/SortButtons";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <main className="flex h-screen flex-col bg-blue pt-14">
      <SearchBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="mt-12 mx-auto">
        <SortButtons />
      </div>
      <article className="w-full">
        <Cards />
      </article>
    </main>
  );
}
