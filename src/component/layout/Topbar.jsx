import React, { useState, useEffect, useRef } from "react";
import adminuser from "../../images/users/admin.webp";
import { Icon } from "@iconify/react";

//import popups
import NotificationPopup from "../ui/popup/topbarpupops/NotificationPopup";
import UserProfilePopup from "../ui/popup/topbarpupops/UserProfilePopup";

function Topbar({ setShowsidebar , showsidebar }) {
  const [userPupop, setUserPupop] = useState(false);
  const [notifictionPupop, setNotifictionPupop] = useState(false);
  const mobaileSize = window.innerWidth;

  const userPopupRef = useRef(null);
  const notificationPopupRef = useRef(null);

  const notificationMenu = [
    { title: "New Order" ,path :'orders'},
    { title: "New Customers",path:'customers' },
    { title: "Add New Product", path:"products" },
  ];

  const UserProfileMenu = [
    { title: "Profile", path:'profile' },
    { title: "Setting" , path:'settings' },
    { title: "Supports" , path : '/' },
  ];

  const handleClickOutside = (e) => {
    if (userPopupRef.current && !userPopupRef.current.contains(e.target)) {
      setUserPupop(false);
    }

    if (
      notificationPopupRef.current &&
      !notificationPopupRef.current.contains(e.target)
    ) {
      setNotifictionPupop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleshowUserPupop = () => {
    setUserPupop(!userPupop);
  };

  const handlenotifictionPupop = () => {
    setNotifictionPupop(!notifictionPupop);
  };

  const handleSidebarToggle = () => {
    setShowsidebar((prev) => !prev);
  };

  return (
    <div className="w-full h-16 flex gap-5 justify-end items-center px-3  relative">
      {mobaileSize <= 780 && (
        <div className={`${showsidebar ? "left-40 max-sm:top-8 max-sm:left-32":"left-3" } lg:hidden w-8 h-8 absolute  flex justify-center items-center`}>
          <Icon
            onClick={handleSidebarToggle}
            icon={showsidebar ? "line-md:menu-fold-left" : "line-md:menu-fold-right"}
            width="35"
            height="35"
            style={{ color: "#134b4a" }}
          />
        </div>
      )}

      {/* Notification Icon */}
      <div
        onClick={handlenotifictionPupop}
        className="h-16 flex gap-1 justify-end items-center cursor-pointer relative"
      >
        <Icon
          icon="mi:notification"
          width="24"
          height="24"
          style={{ color: "#134b4a" }}
        />
        <span className="absolute top-2.5 w-[18px] h-[18px] px-1.5 -right-2 text-[10px] flex justify-center items-center font-bold rounded-full bg-[#134b4a] text-white">
          1
        </span>
      </div>

      {/* User Icon */}
      <div
        onClick={handleshowUserPupop}
        className="flex gap-1 justify-end items-center cursor-pointer"
      >
        <div
          className="w-10 h-10 bg-slate-600 rounded-full bg-center bg-cover border border-gray-400"
          style={{ backgroundImage: `url(${adminuser})` }}
        ></div>
        <h3 className="text-sm font-semibold text-gray-700">Alireza (Admin)</h3>
      </div>

      {/* User Popup */}
      {userPupop && (
        <UserProfilePopup ref={userPopupRef} menu={UserProfileMenu} />
      )}

      {/* Notification Popup */}
      {notifictionPupop && (
        <NotificationPopup ref={notificationPopupRef} menu={notificationMenu} />
      )}
    </div>
  );
}

export default Topbar;
