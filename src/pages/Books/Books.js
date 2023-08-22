import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions";
import item from "../Data/itemsData";
import "./Books.css";

function Books() {
  const dispatch = useDispatch();

  const [addedItemIds, setAddedItemIds] = useState([]);

  const handleAddToCart = (item) => {
    if (!addedItemIds.includes(item.id)) {
      dispatch(addToCart(item));
      setAddedItemIds([...addedItemIds, item.id]);
    }
  };

  return (
    <div className="App">
      <div className="divBooks">
        {item.map((item, index) => (
          <div className="bookCard" key={index}>
            <img src={item.url} className="forImg" alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}$</p>

            <button
              onClick={() => handleAddToCart(item)}
              className="addBtn"
              disabled={addedItemIds.includes(item.id)}
              style={{
                backgroundColor: addedItemIds.includes(item.id)
                  ? "#c6c6c6"
                  : "#c39797",
              }}
            >
              {addedItemIds.includes(item.id) ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
