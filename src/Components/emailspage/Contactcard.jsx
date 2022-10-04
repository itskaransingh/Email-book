import React from "react";
import user from "../image/user.png";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Contactcard = ({ con,del,id }) => {
  // console.log(id)
  return (
    <div className="border-b-2 border-b-black w-full h-fit my-3 md:p-3  px-0 flex  justify-between items-center space-x-2  hover:bg-slate-100">
      <div className=" flex  md:space-x-4 space-x-1 items-center flex-row">
        <div className="md:block  hidden">
          <img src={user} alt="user" className="w-[50px]" />
        </div>

        <div className="flex flex-col pb-2">
          <div className="md:text-2xl text-xl font-semibold">{con.name}</div>
          <div className="md:text-lg text-base font-normal">{con.email}</div>
        </div>
      </div>
      <div className="md:pl-10 md:text-2xl text-xl space-x-3 flex justify-center items-center text-center">
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
