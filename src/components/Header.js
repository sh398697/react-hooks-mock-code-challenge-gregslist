import React from "react";
import Search from "./Search";

function Header({query, onChange}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search query={query} onChange={onChange}/>
    </header>
  );
}

export default Header;
