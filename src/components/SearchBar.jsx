export default function SearchBar({ query, onChange }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search for a restaurant"
      className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 transition dark:bg-white text-black"
    />
  );
}
