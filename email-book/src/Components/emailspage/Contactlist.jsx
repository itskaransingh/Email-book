import React from "react";
import Contactcard from "./Contactcard";
import Newcontact from "../emailspage/Newcontact";
import { useEffect, useContext } from "react";
import { ContextCrud } from "../../Context/contextCrud";
import { Link } from "react-router-dom";

const Contactlist = () => {
  const { contactsfs, retrievedata, handledel } = useContext(ContextCrud);

  const delconhandler = (id) => {
    handledel(id);
  };

  useEffect(() => {
    retrievedata();
  }, []);

  const renderlist =
    contactsfs.length == 0 ? (
      <div className="flex space-y-7 flex-col justify-center items-center pt-10">
        <div className="text-6xl text-gray-500">No Emails</div>
        <Link to="/add">
          <Newcontact />
        </Link>
      </div>
    ) : (
      contactsfs.map((con) => {
        return (
          <Contactcard con={con} del={delconhandler} id={con.id} key={con.id} />
        );
      })
    );

  return (
    <div className="md:px-6 px-2 py-3 flex-col flex space-y-3 justify-center items-center w-screen">
      {renderlist}
    </div>
  );
};

export default Contactlist;
