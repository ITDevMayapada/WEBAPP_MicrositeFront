import React, { useState } from "react";

const SidebarMenu = () => {

  const [openMenus, setOpenMenus] = useState({});

  // 1. Get data list menu from API
  const menuData = [
    {
      title: "Menu1",
      children: [{ title: "ChildMenu1" }, { title: "ChildMenu2" }],
    },
    {
      title: "Menu2",
      children: [{ title: "ChildMenu1" }],
    },
  ];
  
  const toggleMenu = (menuTitle) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuTitle]: !prev[menuTitle],
    }));
  };

  console.log(openMenus);

  return (
    <div className="sidebar">
      {menuData.map((menu, index) => (
        <div key={index}>
          <div
            className="menu-title cursor-pointer"
            onClick={() => toggleMenu(menu.title)}
          >
            {menu.title}
          </div>
          {openMenus[menu.title] && (
            <div className="menu-children ml-4">
              {menu.children.map((child, childIndex) => (
                <div key={childIndex} className="menu-child">
                  {child.title}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const menuData = [
    {
      title: "Menu1",
      children: [{ title: "ChildMenu1" }, { title: "ChildMenu2" }],
    },
    {
      title: "Menu2",
      children: [{ title: "ChildMenu1" }],
    },
  ];

  return (
    <div className="App">
      <SidebarMenu menuData={menuData} />
    </div>
  );
};

export default App;
