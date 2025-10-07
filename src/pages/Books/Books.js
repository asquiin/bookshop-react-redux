import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchBooks } from "../../actions";
import item from "../Data/itemsData";
import "./Books.css";

function Books() {
  const dispatch = useDispatch();
    const { books = [], loading, error } = useSelector((state) => state.app || state);
  
    const [query, setQuery] = useState("Harry Potter");

  const [addedItemIds, setAddedItemIds] = useState([]);

  const handleAddToCart = (item) => {
    if (!addedItemIds.includes(item.id)) {
      dispatch(addToCart(item));
      setAddedItemIds([...addedItemIds, item.id]);
    }
  };

    // Первый запрос при маунте
    useEffect(() => {
      dispatch(fetchBooks(query));
    }, [dispatch]); 
  
    const onSearch = (e) => {
      e.preventDefault();
      if (!query.trim()) return;
      dispatch(fetchBooks(query.trim()));
    };

  return (
    <div className="App">
      {/* <div className="divBooks">
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
      </div> */}

      <div className="px-6 py-8">

        <h1 className="font-bold text-[40px] text-[#CC9600] flex justify-center mt-10 mb-10">Explore All Books Here</h1>
        <div className="flex items-center justify-center gap-4 mb-10 mt-10">
          <form onSubmit={onSearch} className="flex items-center gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search books…"
              className="border rounded-lg px-3 py-2 outline-none w-[400px]"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-black text-white"
            >
              Search
            </button>
          </form>
        </div>

        {loading && <p>Загрузка…</p>}
        {error && <p className="text-red-600">Ошибка: {error}</p>}

        {!loading && !error && (
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {books.map((b) => {
              const v = b.volumeInfo || {};
              const thumb =
                v.imageLinks?.thumbnail ||
                v.imageLinks?.smallThumbnail ||
                "";
              return (
                <li key={b.id} className="p-3 rounded-xl shadow">
                  {thumb ? (
                    <img
                      src={thumb}
                      alt={v.title}
                      className="w-full h-48 object-cover rounded-lg mb-2"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-2" />
                  )}
                  <div className="font-semibold text-sm line-clamp-2">
                    {v.title || "Untitled"}
                  </div>
                  <div className="text-xs text-gray-600">
                    {(v.authors && v.authors.join(", ")) || "Unknown author"}
                  </div>

                  
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Books;
