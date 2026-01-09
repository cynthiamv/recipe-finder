'use client';

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  className?: string;
}

const SearchBar = ({ className = '' }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("search");
    if (query) {
      router.push(`/results?q=${query}`);
    }
  }

  return (
    <form className={`w-[80%] md:w-auto relative ${className}`} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        defaultValue={searchParams.get("q") || ""}
      />
      <button type="submit" className="bg-header absolute top-2 right-3">
        <Search />
      </button>
    </form>
  );
}

export default SearchBar;