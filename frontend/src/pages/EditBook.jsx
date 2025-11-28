import { useEffect, useState } from "react";
import api from "../api";
import { useParams } from "react-router-dom";

export default function EditBook() {
  const { id } = useParams();
  const [form, setForm] = useState({});

  useEffect(() => {
    api.get(`/books/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    await api.put(`/books/${id}`, form);
    alert("Updated!");
    window.location.href = "/admin";
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={submit}>
      <h1 className="text-3xl mb-6 font-bold text-center">Edit Book</h1>

      <input
        value={form.title || ""}
        className="w-full border p-2 mb-3"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        value={form.author || ""}
        className="w-full border p-2 mb-3"
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />

      <input
        value={form.price || ""}
        type="number"
        className="w-full border p-2 mb-3"
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <input
        value={form.coverUrl || ""}
        className="w-full border p-2 mb-3"
        onChange={(e) => setForm({ ...form, coverUrl: e.target.value })}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Save Changes
      </button>
    </form>
  );
}
