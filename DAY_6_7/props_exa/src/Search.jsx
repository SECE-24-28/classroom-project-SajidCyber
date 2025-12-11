import React from "react";

function Search({ search, setSearch }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
