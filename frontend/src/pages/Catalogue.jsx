import { useEffect, useState } from "react";
import api from "../api";

export default function Catalogue() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books").then((res) => setBooks(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl mb-4">Book Catalogue</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((b) => (
          <div key={b._id} className="p-4 border rounded shadow">
            <img
              src={b.coverUrl}
              className="h-48 w-full object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">{b.title}</h3>
            <p className="text-gray-600">{b.author}</p>
            <p className="font-bold mt-2">₹{b.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
