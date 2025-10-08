import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../../actions";

const API_KEY = "AIzaSyBSdsuDMR2_8Rj8oSkDhvYfilF5gPz4e5A";

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { book, bookLoading, bookError } = useSelector((s) => s.app || s);

  useEffect(() => {
    if (!id) return;

    dispatch(
      getRequest({
        url: `https://www.googleapis.com/books/v1/volumes/${id}`,
        params: { key: API_KEY },
        meta: { mode: "detail" },
        onSuccess: (res) => res.data,
      })
    );
  }, [dispatch, id]);

  if (bookLoading) return <p className="p-6">Загрузка…</p>;
  if (bookError) return <p className="p-6 text-red-600">Ошибка: {bookError}</p>;
  if (!book) return null;

  const v = book.volumeInfo || {};
  const cover = v.imageLinks?.thumbnail || v.imageLinks?.smallThumbnail;

return (
  <div>
    <div className="relative">
      <div className="absolute z-20 -translate-x-1/2 top-24 left-1/2 lg:left-[calc(40%+2.5rem)] pointer-events-none">
        <div className="w-[240px] md:w-[280px] lg:w-[320px] aspect-[3/4] mt-[200px] overflow-hidden shadow-xl">
          {cover ? (
            <img src={cover} alt={v.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 items-start">
        <aside className="bg-black text-white p-6 pr-[190px] 
                         h-[100svh] lg:h-screen lg:sticky lg:top-0 overflow-visible">
                          <div className="mt-[50px] pl-10"> 
          <h1 className="text-2xl font-bold mb-2">{v.title || "Untitled"}</h1>
          <h4 className="text-[#FFDD7E]">{v.authors?.[0] || "Unknown author"}</h4>
          </div>
        </aside>

     
        <section className="bg-white rounded-2xl p-6 pl-[190px] overflow-visible">
          <h2 className="text-3xl font-bold mb-2">{v.title || "Untitled"}</h2>
          <div className="text-sm text-gray-600 mb-4">
            {(v.authors && v.authors.join(", ")) || "Unknown author"}
          </div>
          {v.description && <p className="mb-4 whitespace-pre-line">{v.description}</p>}
          <div className="text-sm">Published: {v.publishedDate || "—"}</div>
          <div className="text-sm">Pages: {v.pageCount || "—"}</div>
        </section>
      </div>
    </div>
  </div>
);

}
