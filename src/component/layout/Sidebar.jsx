import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar({setShowsidebar}) {
  const navigate = useNavigate();
  const location = useLocation();
  const locatoin_page = location.pathname;
  const mobaileSize = window.innerWidth;
  
  const menus = [
    { name: "Dashboard", icon: "mdi:home" , path : '/'},
    { name: "Products", icon: "la:product-hunt" , path : '/products' },
    { name: "Category", icon: "carbon:category-new-each" , path : '/categorys' },
    { name: "Orders", icon: "material-symbols:draft-orders" , path : '/orders' },
    { name: "Customers", icon: "streamline-ultimate:customer-relationship-management-lead-management-1"  , path : '/customers'},
    { name: "Profile", icon: "gg:profile" , path : '/profile' },
    { name: "Settings", icon: "mdi:settings-outline", path : '/settings' }
  ];

  const handleNaviaget = (path) =>{
    navigate(path);
    if(mobaileSize < 780){
      setShowsidebar(false);
    }
  }

  return (
    <div className="w-full h-[calc(100%)]">
      <div className="w-full h-16 border-b border-[#bdc0c5] flex gap-3 items-center pl-3">
        <Icon
          icon="teenyicons:cart-solid"
          width="30"
          height="30"
          className="lg:w-8 md:w-7 max-md:w-5"
          style={{ color: "#134b4a" }}
        />
        <h1 className="text-black lg:text-xl md:text-base max-md:text-base font-bold text-center">ShopAdmin</h1>
      </div>
      <div className="w-full h-[calc(100vh-120px)] pt-3 lg:px-2 md:px-1 max-md:px-1 flex flex-col gap-2 items-center ">
        {menus.map((menu, index) => {
          return (
            <div onClick={()=>handleNaviaget(`${menu.path}`)}
              key={index}
              className={`w-full rounded-lg lg:h-10 md:h-10 max-md:h-10 flex items-center gap-2 pl-2
               hover:bg-slate-200 cursor-pointer hover:text-gray-600 
               ${locatoin_page === menu.path && "bg-slate-200 hover:bg-slate-200" } `}
            >
              <Icon
                icon={menu.icon}
                width="22"
                height="22"
                className="lg:w-[22px] md:w-4 max-md:w-6"
                style={{ color: "#134b4a" }}
              />
              <h1 className="text-gray-500 lg:text-base md:text-[14px] max-md:text-[17px] md:font-semibold max-md:font-bold ">
                {menu.name}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="w-full h-14 flex items-center gap-3 pl-4 bg-slate-200 cursor-pointer">
        <Icon
          icon="mdi:logout"
          width="25"
          height="25"
          style={{ color: "#134b4a" }}
        />
        <h1 className="text-black text-base font-semibold">Logout</h1>
      </div>
    </div>
  )
}

export default Sidebar;
