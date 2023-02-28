import React, {useState} from "react";
import Search from "./Search";

function Header({query, onChange, ascending, descending}) {
  const [isDesc, setIsDesc] = useState(false)
  function handleClick(){
    setIsDesc((isDesc) => !isDesc)
    if(isDesc === false) {
      descending()
    }
    else{
      ascending()
    }
  }
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search query={query} onChange={onChange}/>
      <button className={isDesc ? "descending" : "ascending"} onClick={handleClick}>{isDesc ? "Descending" : "Ascending"}</button>

    </header>
  );
}

export default Header;
