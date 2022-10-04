import React from "react";
import { Link } from "react-router-dom";

const Back = () => {
  //   const navigate = useNavigate();

  return (
    <div>
      <Link to="/">
        <button className="bg-blue-500 py-1 px-2 rounded-md font-bold text-slate-800 hover:bg-blue-600">
          Back
        </button>
      </Link>
    </div>
  );
};

export default Back;
