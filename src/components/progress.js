import React from "react";

function Progress({ text, width }) {
  return (
    <>
      <div style={{maxWidth:"80%"}} className=" bg-white flex items-center">
        <div  style={{width:`${width}%`}} className=" bg-gray-400 flex items-end justify-start relative">
          <div className="w-40 relative h-30 bg-gray-600 flex items-center justify-center">
            <div className="text-white relative text-center">{text}</div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}

export default Progress;
