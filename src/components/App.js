import React,{useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [freeItem, setFreeItem] = useState([])
  const [query, setQuery] = useState("")
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
const search = freeItem.filter((item) => item.description.toLowerCase().includes(query))

function onChangeEvent(e) {
  setQuery(e.target.value)
}

function ascending(){
  let data = [...freeItem]
  if(data.length > 0) {
    let result = data.sort((a,b) => a.location.localeCompare(b.location))
    setFreeItem(result)
  }
}
function descending(){
  let data = [...freeItem]
  if(data.length > 0) {
    let result = data.sort((a,b) => b.location.localeCompare(a.location))
    setFreeItem(result)
  }
}
  return (
    <div className="app">
      <Header  query={query} onChange={onChangeEvent} ascending={ascending} descending={descending}/>
      <ListingsContainer onDelete={onDelete} search={search}/>
    </div>
  );
}

export default App;
