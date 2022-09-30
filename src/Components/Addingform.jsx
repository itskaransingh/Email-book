import React from "react";
import { useState } from "react";

const Addingform = ({ cinfopicker }) => {
  const [contactinfo, setcontactinfo] = useState({ name: "", email: "" });

  const handlechange = (event) => {
    const { name, value } = event.target;
    setcontactinfo({ ...contactinfo, [name]: value });
  };
  
  const handleclick=(e)=>{
    e.preventDefault();
   if (contactinfo.email== "" || contactinfo.name== "") {
    alert("Plz Fill All Fields")
   } else {
     cinfopicker(contactinfo)
     setcontactinfo({ name: "", email: "" })
   }
 }



  return (
    <div className="addingform  pt-5 ">
      <form action="">
        <div className="flex flex-col space-y-1">
          <label htmlFor="namein" className="font-bold">
            Name
          </label>
          <input
            type="text"
            id="namein"
            name="name"
            className="border border-black text-md p-1 px-2 font-semibold "
            value={contactinfo.name}
            required
            onChange={handlechange}
          />
          <label htmlFor="emailin" className="font-bold pt-2">
            Email
          </label>
          <input
            type="email"
            id="emailin"
            name="email"
            className="border border-black text-md p-1 px-2 font-semibold "
            value={contactinfo.email}
            onChange={handlechange}
          />
          <button
            type="submit"
            className="bg-blue-400 py-3 text-xl font-bold rounded-md "
            onClick={handleclick}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addingform;
