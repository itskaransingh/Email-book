import React from "react";
import { createContext, useContext, useState } from "react";
import api from "../api/contacts";
import { v4 as uuidv4 } from "uuid";

export const ContextCrud = createContext("");

export const ContextCrudProvider = ({children}) => {
  const [contactsfs, setContactsfs] = useState([]);

  //retrieve contacts func
  const retrievedata = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContactsfs(response.data);
  };
  
  //deleting contacts func

  const handledel = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newcondata = contactsfs.filter((contact) => {
      return contact.id !== id;
    });
    setContactsfs(newcondata);
  };


  let cinfopicker = async (statedata) => {
    const response = await api.post("/contacts", {
      id: uuidv4(),
      ...statedata,
    });
    setContactsfs([...contactsfs, response.data]);
  };

  const states = {
    contactsfs,
    retrievedata,
    handledel,
    cinfopicker
  };
  return (
    <ContextCrud.Provider value={states}>{children}</ContextCrud.Provider>
  );
};

export const useContextCrud = () => {
  return useContext(ContextCrud);
};
