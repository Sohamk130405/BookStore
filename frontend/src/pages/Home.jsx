export default function Home() {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-5xl font-bold mt-10">
        Welcome to <span className="text-blue-600">BookStore</span>
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto">
        Discover your next great read. Browse books, explore categories, and
        find the best prices.
      </p>

      <a
        href="/catalogue"
        className="bg-blue-600 text-white px-6 py-3 rounded text-lg shadow hover:bg-blue-700"
      >
        Browse Catalogue
      </a>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 px-4">
        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">1000+ Books</h3>
          <p className="text-gray-600">Explore a huge collection</p>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Fast Delivery</h3>
          <p className="text-gray-600">Get books delivered at your doorstep</p>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Best Prices</h3>
          <p className="text-gray-600">Affordable & student-friendly</p>
        </div>
      </div>
    </div>
  );
}
