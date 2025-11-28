import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    api.get(`/books/${id}`).then((res) => setBook(res.data));
  }, [id]);

  return (
    <div className="max-w-3xl mx-auto">
      <img
        src={book.coverUrl}
        className="w-full h-96 object-cover rounded shadow"
      />

      <h1 className="text-4xl font-bold mt-6">{book.title}</h1>
      <h3 className="text-xl text-gray-600 mt-2">{book.author}</h3>

      <p className="text-2xl mt-4 font-bold">₹{book.price}</p>
    </div>
  );
}
