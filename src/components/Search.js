import React from "react";

function Search({query, onChange}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={query}
        onChange={onChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
