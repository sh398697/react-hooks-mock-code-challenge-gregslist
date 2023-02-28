import React,{useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
/////////////////////////////////////////////////////
function App() {
  const [freeItem, setFreeItem] = useState([])
  const [query, setQuery] = useState("")
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [image, setImage] = useState('')
/////////////////////////////////////////////////////
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
  /////////////////////////////////////////////////////
  function onPost(){
    const data = {
      description: description,
      image: image,
      location: location,
    }
  fetch('http://localhost:6001/listings', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then(r => r.json())
    .then(itemArray => {
      console.log(itemArray)
      setFreeItem(itemArray)
    })
  }
  /////////////////////////////////////////////////////
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

  function handleDescription(e) {
    setDescription(e.target.value)
  }
  function handleLocation(e) {
    setLocation(e.target.value)
  }
  function handleImage(e) {
    setImage(e.target.value)
  }
  return (
    <div className="app">
      <Header  query={query} onChange={onChangeEvent} ascending={ascending} descending={descending}/>
      <ListingsContainer
      onDelete={onDelete} search={search} onPost={onPost}
      handleDescription={handleDescription} handleLocation={handleLocation} handleImage={handleImage}
      />
    </div>
  );
}

export default App;
