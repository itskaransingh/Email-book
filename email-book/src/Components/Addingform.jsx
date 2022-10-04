import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextCrud } from "../Context/contextCrud";

const Addingform = () => {
  const { cinfopicker } = useContext(ContextCrud);

  const [contactinfo, setcontactinfo] = useState({ name: "", email: "" });

  const navigate = useNavigate();

  const handlechange = (event) => {
    const { name, value } = event.target;
    setcontactinfo({ ...contactinfo, [name]: value });
  };

  const handleclick = (e) => {
    e.preventDefault();
    if (contactinfo.email == "" || contactinfo.name == "") {
      alert("Plz Fill All Fields");
    } else {
      cinfopicker(contactinfo);
      setcontactinfo({ name: "", email: "" });
      navigate(`/`);
    }
  };

  return (
    <div className="addingform px-6  md:pt-32 pt-16  ">
      <form action="" className="flex justify-center  items-center">
        <div className="flex flex-col lg:w-2/4 w-full  justify-center ">
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
          <div className="bg-blue-400 hover:bg-blue-500 py-4 text-xl font-bold rounded-md text-center mt-6">
            <button type="submit" className="w-full " onClick={handleclick}>
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addingform;
