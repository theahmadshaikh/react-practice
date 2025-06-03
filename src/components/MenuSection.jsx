import { useState, useRef, useLayoutEffect } from "react";
import MenuCard from "./MenuCard";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
    setIsOpen((prev) => {
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
    <div className="border border-gray-200 rounded-md shadow-sm">
      {/* Header */}
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 transition rounded-t-md"
        aria-expanded={isOpen}
      >
        <h2 className="text-lg font-semibold text-gray-800">
          {section.category} ({section.items?.length || 0})
        </h2>
        {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          overflow: "hidden",
          transition: "max-height 0.4s ease, opacity 0.3s ease",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="divide-y divide-gray-100 ">
          {section.items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
