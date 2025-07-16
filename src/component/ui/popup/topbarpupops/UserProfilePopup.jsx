import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const UserProfilePopup = forwardRef(({menu} , ref) => {
  const navigate = useNavigate();
  return (
    <div
      ref={ref}
      className="absolute px-3 top-14 right-8 w-40 h-auto rounded-lg bg-white shadow-lg border border-gray-200 z-50"
    >
      <div className="w-full h-12 flex flex-col gap-1 justify-center">
        <p className="text-base font-semibold">My Account</p>
        <hr className="w-full h-[1px] bg-slate-400" />
      </div>

      <div className="w-full">
        {menu && menu.length > 0 ? (
          menu.map((item, index) => (
            <p
              onClick={()=>navigate(`${item.path}`)}
              key={index}
              className="text-[16px] text-gray-800 p-1 hover:bg-slate-100 rounded-sm cursor-pointer"
            >
              {item.title}
            </p>
          ))
        ) : (
          <p className="text-sm text-gray-500 p-1 italic">No menu items</p>
        )}

        <hr className="w-full h-[1px] my-1 bg-slate-400" />

        <p className="text-[16px] pb-1 mb-1 mt-[1px] px-1 text-gray-800 hover:bg-slate-100 rounded-md cursor-pointer">
          Logout
        </p>
      </div>
    </div>
  );
});

export default UserProfilePopup;
