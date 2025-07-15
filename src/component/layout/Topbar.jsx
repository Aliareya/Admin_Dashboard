import React, { useState, useEffect, useRef } from "react";
import adminuser from "../../images/users/admin.webp";
import { Icon } from "@iconify/react";

//import popups
import NotificationPopup from "../ui/popup/topbarpupops/NotificationPopup";
import UserProfilePopup from "../ui/popup/topbarpupops/UserProfilePopup";

function Topbar() {
  const [userPupop, setUserPupop] = useState(false);
  const [notifictionPupop, setNotifictionPupop] = useState(false);

  const userPopupRef = useRef(null);
  const notificationPopupRef = useRef(null);

  const notificationMenu = [
    { title: "New Order" },
    { title: "Product Inventory" },
    { title: "Add New Product" },
  ];

  const UserProfileMenu = [
    { title: "Profile" },
    { title: "Setting" },
    { title: "Supports" },
  ];

  const handleClickOutside = (e) => {
    if (
      userPopupRef.current &&
      !userPopupRef.current.contains(e.target)
    ) {
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

  return (
    <div className="w-full h-16 flex gap-5 justify-end items-center px-3 relative">
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
        <h3 className="text-sm font-semibold text-gray-700">
          Alireza (Admin)
        </h3>
      </div>

      {/* User Popup */}
      {userPupop && (
        <UserProfilePopup ref={userPopupRef} menu={UserProfileMenu}/>
      )}

      {/* Notification Popup */}
      {notifictionPupop && (
        <NotificationPopup ref={notificationPopupRef} menu={notificationMenu} />
      )}
    </div>
  );
}

export default Topbar;
