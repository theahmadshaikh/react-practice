export default function ShimmerRestaurantCard() {
  return (
    <div className="animate-pulse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md dark:shadow-lg p-4 space-y-4">
      <div className="w-full h-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
      <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
      <div className="space-y-2">
        <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-3 w-1/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
      <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
    </div>
  );
}
