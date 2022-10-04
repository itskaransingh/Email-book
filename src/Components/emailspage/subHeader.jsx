import React from "react";
import Newcontact from "./Newcontact";
import { Link } from "react-router-dom";

const Subheader = () => {
  return (
    <div className="flex justify-between md:px-6 px-2 py-4 w-screen bg-teal-200">
      <div className="text-2xl font-bold">Emails</div>

    <Link to="/add"> <Newcontact /></Link>
    </div>
  );
};

export default Subheader;
