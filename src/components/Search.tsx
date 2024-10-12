import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => console.log(search)}>Click</button>
    </div>
  );
};

export default Search;
