import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaPlus, FaMinus } from "react-icons/fa6"; // Changed from fa to fa6

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrLabel]: !displayCurrentChildren[getCurrLabel],
    });
  };

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {
          //   If any children present then show + icon
          item.children && item.children.length > 0 ? (
            <span onClick={() => handleToggleChildren(item.label)}>
              {displayCurrentChildren[item.label] ? (
                <FaMinus color="#fff" size={25} />
              ) : (
                <FaPlus color="#fff" size={25} />
              )}
            </span>
          ) : null
        }
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        // Recursive calling of menu list component if any children present
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
