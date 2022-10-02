import React from "react";
import user from "../image/user.png";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Contactcard = ({ con,del,id }) => {
  // console.log(id)
  return (
    <div className="bg-slate-500 h-fit my-3 p-3 rounded-lg flex justify-between items-center">
      <div className=" flex  space-x-3  items-center flex-wrap">
        <div>
          <img src={user} alt="user" className="w-[50px]" />
        </div>

        <div className="flex flex-col">
          <div className="text-2xl font-semibold">{con.name}</div>
          <div className="text-lg font-normal">{con.email}</div>
        </div>
      </div>
      <div className="pl-10 text-2xl space-x-3 flex justify-center items-center text-center">
        <i>
          <FaEdit />
        </i>
        <i className="
        text-red-900 hover:text-red-700"
        onClick={()=>del(id)}>
          <FaTrashAlt /> 
        </i>
      </div>
    </div>
  );
};

export default Contactcard;
