import React from 'react'
import { useNavigate } from 'react-router-dom';

function NotificationPopup({menu , ref}) {
  const navigate = useNavigate();
  return (
    <div
          ref={ref}
          className="absolute px-3 top-14 right-32 w-44 h-auto pb-1.5 rounded-lg bg-white shadow-lg border border-gray-200 z-50"
        >
          <div className="w-full h-12 flex flex-col gap-1 justify-center">
            <p className="text-base font-semibold">Notifications</p>
            <hr className="w-full h-[1px] bg-slate-400" />
          </div>
          <div className="w-full overflow-y-auto max-h-[100px]">
            {menu.map((menu, index) => (
              <p
                onClick={()=>navigate(`${menu.path}`)}
                key={index}
                className="text-[16px] text-gray-800 p-1 hover:bg-slate-100 rounded-sm cursor-pointer"
              >
                {menu.title}
              </p>
            ))}
          </div>
        </div>
  )
}

export default NotificationPopup