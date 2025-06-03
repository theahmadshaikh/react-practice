const MenuCardShimmer = () => (
  <div className="flex justify-between gap-4 px-4 py-4 border-t border-gray-100 animate-pulse">
    {/* Left: Text skeleton */}
    <div className="flex-1 space-y-2">
      <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
      <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
      <div className="h-3 w-full bg-gray-200 rounded"></div>
      <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
    </div>

    {/* Right: Image placeholder */}
    <div className="w-28 flex flex-col items-center">
      <div className="w-full h-24 bg-gray-200 rounded-md border"></div>
    </div>
  </div>
);

export default MenuCardShimmer;
