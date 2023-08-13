import SearchBar from "@/components/main/SearchBar";
import SortButtons from "@/components/main/SortButtons";
import WorldcupList from "@/components/main/WorldcupList";
import { useWorldcups } from "@/lib/hooks/useWorldcups";
export default function Home() {
	const { containerRef, sort, setSort, setSearch, worldcups, isLoading } =
		useWorldcups("/worldcups");

	return (
		<main
			className="flex h-screen flex-col overflow-y-scroll relative pt-24"
			ref={containerRef}>
			<SearchBar setSearch={setSearch} />
			<SortButtons setSort={setSort} sort={sort} />
			<WorldcupList worldcups={worldcups} isLoading={isLoading} />
		</main>
	);
}
