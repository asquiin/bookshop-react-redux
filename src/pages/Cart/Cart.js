import React, { useState } from "react";
import axios from "axios";
import mainPhoto from "../../assets/cart-pic.svg";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../actions";

const ACCESS_KEY = "4pm3E_gTuWauAGhr5cXlUQTSnhREl2_TQFoNsWh5Tp0";

function Cart() {
  const [query, setQuery] = useState("dogs");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      });

      setPhotos(res.data.results || []);
    } catch (err) {
      setError(err.message || "Ошибка при загрузке изображений");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Cart</h1>
        <img src={mainPhoto} alt="Cart" className="w-24 h-auto" />
      </div>

      <form
        onSubmit={handleSearch}
        className="flex gap-2 items-center w-full max-w-md"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Введите запрос (например, "dogs")'
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-500 text-white text-sm"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-sm text-gray-600">Загрузка...</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-2">
        {photos.map((photo) => (
          <a
            key={photo.id}
            href={photo.links.html}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <img
              src={photo.urls.small}
              alt={photo.alt_description || query}
              className="w-full h-32 object-cover rounded-md"
            />
            <div className="mt-1 text-xs text-gray-700 truncate">
              {photo.user?.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Cart;
