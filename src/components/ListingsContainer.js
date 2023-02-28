import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({onDelete, search}) {

  return (
    <main>
      <ul className="cards">
        {search.map((item) => (
          <ListingCard key={item.id} id={item.id} description={item.description} image={item.image} location={item.location} onDelete={onDelete}/>
        ))
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
