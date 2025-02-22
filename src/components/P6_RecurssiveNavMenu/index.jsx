import React from "react";
import "./style.css";
import MenuList from "./menu-list";

const TreeView = ({ menus = [] }) => {
  return (
    <div className='treeView-container'>
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
