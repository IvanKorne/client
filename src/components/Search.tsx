import { ChangeEvent, SyntheticEvent } from "react";

type SearchProps = {
  search: string;
  onSearchSubmit: (e: SyntheticEvent) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: SearchProps) => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl p-6 mx-auto space-y-6">
        <form
          className="relative flex flex-col w-full p-10 space-y-4 rounded-lg form bg-darkBlue md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 placeholder-black border-2 rounded-lg focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          ></input>
        </form>
      </div>
    </section>
  );
};

export default Search;
