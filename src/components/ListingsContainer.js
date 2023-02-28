import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({onDelete, search, onPost, handleDescription, handleLocation, handleImage}) {


  return (
    <main>
      <form onSubmit={onPost}>
        <h2>Sell</h2>
        <input onChange={handleDescription} type="text" placeholder="description"></input>
        <input onChange={handleImage} type="text" placeholder="image"></input>
        <input onChange={handleLocation} type="text" placeholder="location"></input>
        <button>Let's do some Biz</button>
      </form>
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
