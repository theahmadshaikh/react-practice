const MenuCard = ({ item }) => (
  <div className="flex justify-between gap-4 px-4 py-4 border-t border-gray-200">
    {/* Info Section */}
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
      <p className="text-sm text-gray-700">₹{item.price}</p>

      {item.rating && (
        <p className="text-sm text-yellow-600 mt-1">
          ★ {item.rating}
          <span className="text-gray-500 ml-1">({item.ratingCount})</span>
        </p>
      )}

      {item.description && (
        <p className="text-sm text-gray-600 mt-2">{item.description}</p>
      )}
    </div>

    {/* Image & ADD Button Section */}
    {item.imageUrl && (
      <div className="w-28 flex flex-col items-center">
        <img
          className="w-full h-24 object-cover rounded-md border"
          src={item.imageUrl}
          alt={item.name}
        />

        <button className="mt-2 bg-white text-green-600 border border-green-600 text-xs px-3 py-1 rounded-full shadow hover:bg-green-600 hover:text-white transition">
          ADD
        </button>

        <p className="text-[10px] text-gray-500 mt-1">Customisable</p>
      </div>
    )}
  </div>
);
export default MenuCard;
