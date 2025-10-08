// src/pages/Books/Details.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../../actions";

const API_KEY = "AIzaSyBSdsuDMR2_8Rj8oSkDhvYfilF5gPz4e5A";

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // если у тебя combineReducers({ app: ... }) — берём s.app, иначе s
  const { book, bookLoading, bookError } = useSelector((s) => s.app || s);

  useEffect(() => {
    if (!id) return;

    dispatch(
      getRequest({
        url: `https://www.googleapis.com/books/v1/volumes/${id}`,
        params: { key: API_KEY },
        meta: { mode: "detail" },            // редьюсер поймёт, что это детальная загрузка
        onSuccess: (res) => res.data,        // payload = объект книги
      })
    );
  }, [dispatch, id]);

  if (bookLoading) return <p className="p-6">Загрузка…</p>;
  if (bookError) return <p className="p-6 text-red-600">Ошибка: {bookError}</p>;
  if (!book) return null;

  const v = book.volumeInfo || {};
  const cover = v.imageLinks?.thumbnail || v.imageLinks?.smallThumbnail;

  return (
    <div className="px-6 py-8">
      <Link to="/Books" className="inline-block mb-4 underline">
        ← Back to Books
      </Link>

      <div className="grid md:grid-cols-3 gap-6">
        {cover ? (
          <img src={cover} alt={v.title} className="w-full rounded-lg" />
        ) : (
          <div className="w-full h-64 bg-gray-200 rounded-lg" />
        )}

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{v.title || "Untitled"}</h1>
          <div className="text-sm text-gray-600 mb-4">
            {(v.authors && v.authors.join(", ")) || "Unknown author"}
          </div>
          {v.description && <p className="mb-4">{v.description}</p>}
          <div className="text-sm">Published: {v.publishedDate || "—"}</div>
          <div className="text-sm">Pages: {v.pageCount || "—"}</div>
        </div>
      </div>
    </div>
  );
}
