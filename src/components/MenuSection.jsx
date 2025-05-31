import MenuCard from "./MenuCard";

const MenuSection = ({ section }) => (
  <div className="menu-section">
    <h2 className="section-title">{section.category}</h2>
    {section.items.map(item => (
      <MenuCard key={item.id} item={item} />
    ))}
  </div>
);
export default MenuSection;