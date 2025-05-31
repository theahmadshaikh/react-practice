const MenuCardShimmer = () => (
  <div className="shimmer-wrapper">
    <div className="menu-info">
      <div className="shimmer shimmer-title"></div>
      <div className="shimmer shimmer-price"></div>
      <div className="shimmer shimmer-desc"></div>
      <div className="shimmer shimmer-desc" style={{ width: '60%' }}></div>
    </div>
    <div className="menu-image-wrapper">
      <div className="shimmer shimmer-image"></div>
    </div>
  </div>
);

export default MenuCardShimmer;
