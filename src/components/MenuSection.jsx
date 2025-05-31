import { useState, useRef, useLayoutEffect } from "react";
import MenuCard from "./MenuCard";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MenuSection = ({ section }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver(() => {
      if (isOpen && contentRef.current) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      }
    });

    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, [isOpen]);

  const toggle = () => {
    setIsOpen(prev => {
      const newState = !prev;

      if (!newState) {
        setHeight("0px");
      } else {
        requestAnimationFrame(() => {
          if (contentRef.current) {
            setHeight(`${contentRef.current.scrollHeight}px`);
          }
        });
      }

      return newState;
    });
  };

  return (
    <div className="menu-section">
      <div className="menu-section-header" onClick={toggle}>
        <h2 className="section-title">
          {section.category} ({section.items?.length || 0})
        </h2>
        {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
      </div>

      <div
        ref={contentRef}
        className="menu-items-wrapper"
        style={{
          maxHeight: height,
          overflow: "hidden",
          transition: "max-height 0.4s ease, opacity 0.3s ease",
          opacity: isOpen ? 1 : 0,
        }}
      >
        {section.items.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
