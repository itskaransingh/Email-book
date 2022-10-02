import React from "react";
import Header from "./Components/Header";
import Contactlist from "./Components/Contactlist";
import Addingform from "./Components/Addingform";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import api from "./api/contacts";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [contactdata, setcontactdata] = useState([]);
  const retrievedata = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  retrievedata();

  useEffect(() => {
    const getallcontacts = async () => {
      const allcontacts = await retrievedata();
      if (allcontacts) setcontactdata(allcontacts);
    };
    getallcontacts();
  }, []);

  let cinfopicker = async (statedata) => {
    const response = await api.post("/contacts", {
      id: uuidv4(),
      ...statedata,
    });
    setcontactdata([...contactdata, response.data]);
  };

  const handledel = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newcondata = contactdata.filter((contact) => {
      return contact.id !== id;
    });
    setcontactdata(newcondata);
  };

  return (
    <div>

      <Header/>

      <div className="container p-6">
            <Addingform cinfopicker={cinfopicker} />
              <Contactlist
                contactdatas={contactdata}
                handledelete={handledel}
              />
      </div>
      {/* <Router>
        <Header />
        
          <Routes>
            <Route path="/add" element={<Addingform />} />

            <Route path="/" element={<Contactlist />} />
          </Routes>
        
      </Router> */}
    </div>
  );
}

export default App;
