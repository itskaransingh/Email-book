import React from 'react'
import Back from './back';
import { Link } from "react-router-dom";


const Addheader = () => {
  return (
    <div className="flex justify-between md:px-6 px-2 py-4 bg-teal-200">
      <div className="text-2xl font-bold">Add Email</div>

      <Link to="/">
        {" "}
        <Back />
      </Link>
    </div>
  )
}

export default Addheader