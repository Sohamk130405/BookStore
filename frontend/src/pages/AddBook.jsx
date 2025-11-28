import { useState } from "react";
import api from "../api";

export default function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    coverUrl: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/books", form);
    alert("Book Added Successfully!");
    window.location.href = "/admin";
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={submit}>
      <h1 className="text-3xl mb-6 font-bold text-center">Add New Book</h1>

      <input
        placeholder="Title"
        className="w-full border p-2 mb-3"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        placeholder="Author"
        className="w-full border p-2 mb-3"
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />

      <input
        placeholder="Price"
        type="number"
        className="w-full border p-2 mb-3"
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <input
        placeholder="Cover Image URL"
        className="w-full border p-2 mb-3"
        onChange={(e) => setForm({ ...form, coverUrl: e.target.value })}
      />

      <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
        Add Book
      </button>
    </form>
  );
}
