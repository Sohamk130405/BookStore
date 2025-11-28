import { useState } from "react";
import api from "../api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", form);
    alert("Registered! Login now.");
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={submit}>
      <h2 className="text-3xl mb-4">Register</h2>

      <input
        className="w-full border p-2 mb-3"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="w-full border p-2 mb-3"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        className="w-full border p-2 mb-3"
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}
