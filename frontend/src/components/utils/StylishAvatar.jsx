import React from "react";

const StylishAvatar = ({ img }) => {
    return ( 
        <>
            <div className="">
                <img alt=".." className="w-10 h-10 border-4 cursor-pointer border-red-400 rounded-full" src={img} />
            </div>
        </>
     );
}
 
export default StylishAvatar;   