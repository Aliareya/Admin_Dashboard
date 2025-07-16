import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./component/layout/Sidebar";
import Dashbaord from "./Dashbaord";
import Topbar from "./component/layout/Topbar";
function App() {
  const [showsidebar, setShowsidebar] = useState(true);
  const [mobaileSize,setMobailSize]= useState(window.innerWidth);

  useEffect(()=>{
    if(window.innerWidth < 780){
      setShowsidebar(false);
    }
  },[])

  return (
    <div className="w-full flex">
      <div
        className={`${mobaileSize < 780 ? "absolute" : ""} ${showsidebar ? "w-1/5 xl:w-1/6 lg:w-[18%]" : "notShow"
        } sidebar h-[calc(100%)] bg-slate-200`}
      >
        <div
          className={`${
            showsidebar ? "w-1/5 xl:w-1/6 md:w-1/5 max-md:w-[27%] lg:w-[18%] " : "notShow"
          } fixed h-[calc(100%)] bg-white border-r border-[#bdc0c5] `}
        >
          <Sidebar setShowsidebar={setShowsidebar}/>
        </div>
      </div>
      <div className={`${showsidebar && mobaileSize < 780 ?"w-full":showsidebar?'w-[84%]' : 'w-full'} content h-auto`}>
        <div className="topbar w-full h-16 bg-white border-b border-[#bdc0c5]">
          <Topbar setShowsidebar={setShowsidebar} showsidebar={showsidebar} />
        </div>
        <div className="main w-full h-96 bg-slate-50 pl-1">
          <Dashbaord/>
        </div>
      </div>
    </div>
  );
}

export default App;
