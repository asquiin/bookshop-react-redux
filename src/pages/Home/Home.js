import React, { useEffect, useState } from "react";
import mainPhoto from "../../assets/main-photo.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../actions"; // или "../../actions/index.js"

function Home() {
  const dispatch = useDispatch();

  // Если у тебя один rootReducer без combineReducers:
  // const { books = [], loading, error } = useSelector((state) => state);

  // Если у тебя combineReducers({ app: rootReducer }):
  const { books = [], loading, error } = useSelector((state) => state.app || state);

  const [query, setQuery] = useState("Harry Potter");

  // Первый запрос при маунте
  useEffect(() => {
    dispatch(fetchBooks(query));
  }, [dispatch]); // намеренно без query, чтобы не стрелял на каждый ввод

  const onSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    dispatch(fetchBooks(query.trim()));
  };

  return (
    <>
      <div className="w-full h-[100%]">
        <img
          src={mainPhoto}
          alt="Main background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-6 py-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-[48px] font-bold">Our Best Picks</h1>

          <form onSubmit={onSearch} className="flex items-center gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search books…"
              className="border rounded-lg px-3 py-2 outline-none"
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
    </>
  );
}

export default Home;
