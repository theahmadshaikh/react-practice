const MenuCard = ({ item }) => (
  <div className="menu-card">
    <div className="menu-info">
      <h3 className="menu-title">{item.name}</h3>
      <p className="menu-price">₹{item.price}</p>
      {item.rating && (
        <p className="menu-rating">
          <span className="star">★</span> {item.rating}
          <span className="rating-count">({item.ratingCount})</span>
        </p>
      )}
      <p className="menu-desc">{item.description}</p>
    </div>

    {item.imageUrl && (
      <div className="menu-image-wrapper">
        <img className="menu-image" src={item.imageUrl} alt={item.name} />
        <button className="add-button">ADD</button>
        <p className="customisable">Customisable</p>
      </div>
    )}
  </div>
);
export default MenuCard;