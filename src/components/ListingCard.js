import React, {useState} from "react";

function ListingCard({description, image, location, onDelete, id}) {
  const [isFav, setIsFav] = useState(false)


  function handleClick() {
    setIsFav((isFav) => !isFav)
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFav ? (<button onClick={handleClick} className="emoji-button favorite active">★</button>) : (<button onClick={handleClick} className="emoji-button favorite">☆</button>)}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={()=>onDelete(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
