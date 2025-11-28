import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Catalogue from "./pages/Catalogue";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add-book" element={<AddBook />} />
          <Route path="/admin/edit-book/:id" element={<EditBook />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </>
  );
}
