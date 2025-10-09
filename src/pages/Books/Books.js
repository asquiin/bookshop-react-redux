import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getRequest } from "../../actions";
import { Link } from "react-router-dom";
import "./Books.css";

function Books() {
  const API_KEY = 'AIzaSyBSdsuDMR2_8Rj8oSkDhvYfilF5gPz4e5A';
  const dispatch = useDispatch();
  const { books = [], loading, error } = useSelector((state) => state.app || state);

  const [query, setQuery] = useState("fairy tales");
  const [addedItemIds, setAddedItemIds] = useState([]);
  const [limit, setLimit] = useState(20);

  const handleAddToCart = (b) => {
    // volumeInfo для названия/картинки, saleInfo для цены
    const v = b.volumeInfo || {};
    const s = b.saleInfo || {};
    const thumb = v.imageLinks?.thumbnail || v.imageLinks?.smallThumbnail || "";
    const price =
      (s.listPrice && Number(s.listPrice.amount)) ||
      (s.retailPrice && Number(s.retailPrice.amount)) ||
      0; // фолбэк, если цены нет

    const cartItem = {
      id: b.id,
      name: v.title || "Untitled",
      price,
      url: thumb,
    };

    if (!addedItemIds.includes(cartItem.id)) {
      dispatch(addToCart(cartItem));
      setAddedItemIds((prev) => [...prev, cartItem.id]);
    }
  };

  useEffect(() => {
    dispatch(getRequest({
      url: "https://www.googleapis.com/books/v1/volumes",
      params: { q: query, maxResults: limit, orderBy: "relevance", key: API_KEY },
      meta: { mode: "list" },
      onSuccess: (res) => Array.isArray(res.data?.items) ? res.data.items : [],
    }));
  }, [dispatch, query, limit]);

  return (
    <div className="App">
      <div className="px-6 py-8">
        <h1 className="font-bold text-[40px] text-[#CC9600] flex justify-center mt-10 mb-10">
          Explore All Books Here
        </h1>

        {loading && <p>Загрузка…</p>}
        {error && <p className="text-red-600">Ошибка: {error}</p>}

        {!loading && !error && (
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {books.map((b) => {
              const v = b.volumeInfo || {};
              const thumb = v.imageLinks?.thumbnail || v.imageLinks?.smallThumbnail || "";
              const title = v.title || "Untitled";
              const authors = (v.authors && v.authors.join(", ")) || "Unknown author";

              const isAdded = addedItemIds.includes(b.id);

              return (
                <li key={b.id} className="p-3 rounded-xl shadow flex flex-col">
                  {thumb ? (
                     <Link to={`/details/${b.id}`}> 
                    <img
                      src={thumb}
                      alt={title}
                      className="w-full h-48 object-cover rounded-lg mb-2"
                    />
                    </Link>
                  ) : (
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-2" />
                  )}

                  <div className="font-semibold text-sm line-clamp-2">{title}</div>
                  <div className="text-xs text-gray-600 mb-3">{authors}</div>

                  <button
                    onClick={() => handleAddToCart(b)}
                    disabled={isAdded}
                    className={`mt-auto px-3 py-2 rounded-lg text-sm border transition
                      ${isAdded
                        ? "bg-gray-300 border-gray-300 text-gray-600 cursor-not-allowed"
                        : "bg-black text-white border-black hover:opacity-90"}
                    `}
                  >
                    {isAdded ? "Added to Cart" : "Add to Cart"}
                  </button>
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
