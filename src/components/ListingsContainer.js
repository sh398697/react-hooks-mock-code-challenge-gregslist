import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [freeItem, setFreeItem] = useState([])
  function getListings(){
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(itemArray => {
        console.log(itemArray)
        setFreeItem(itemArray)
      })
  }
  useEffect (() => {
    getListings()
  }, [])

function onDelete(id) {
  fetch(`http://localhost:6001/listings/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
  })
    .then(r => r.json())
    .then(result => {
      getListings()
      console.warn(result)})


}

  return (
    <main>
      <ul className="cards">
        {freeItem.map((item) => (
          <ListingCard key={item.id} id={item.id} description={item.description} image={item.image} location={item.location} onDelete={onDelete}/>
        ))
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
