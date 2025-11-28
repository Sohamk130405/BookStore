import { useEffect, useState } from "react";
import api from "../api";

export default function AdminDashboard() {
  const [books, setBooks] = useState([]);

  const loadBooks = () => {
    api.get("/books").then((res) => setBooks(res.data));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const deleteBook = async (id) => {
    if (!confirm("Delete book?")) return;
    await api.delete(`/books/${id}`);
    loadBooks();
  };

  return (
    <div>
      <h1 className="text-3xl mb-6 text-center font-bold">Admin Dashboard</h1>

      <a
        href="/admin/add-book"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        + Add New Book
      </a>

      <table className="w-full mt-6 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Title</th>
            <th className="p-3 border">Price</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((b) => (
            <tr key={b._id}>
              <td className="p-3 border">{b.title}</td>
              <td className="p-3 border">₹{b.price}</td>

              <td className="p-3 border flex gap-3 justify-center">
                <a
                  href={`/admin/edit-book/${b._id}`}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </a>

                <button
                  onClick={() => deleteBook(b._id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
