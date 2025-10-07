import React, { useEffect, useState } from "react";
import mainPhoto from "../../assets/main-photo.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../actions"; 

function Home() {
  const dispatch = useDispatch();
  const { books = [], loading, error } = useSelector((state) => state.app || state);

  const [query, setQuery] = useState("Лев Толстой");

  useEffect(() => {
    dispatch(fetchBooks(query));
  }, [dispatch]); 



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
        <div className="flex items-center justify-center gap-4 mb-10 mt-10">
          <h1 className="text-[48px] font-bold">Our Best Picks</h1>

        </div>

        {loading && <p>Загрузка…</p>}
        {error && <p className="text-red-600">Ошибка: {error}</p>}

        <div className="flex justify-center align-center">

        {!loading && !error && (
          <ul className="grid grid-cols-2 grid-rows-2 gap-5">
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
                      className="w-full h-65 object-cover rounded-lg mb-2"
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
    </>
  );
}

export default Home;
