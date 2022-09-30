import Header from "./Components/Header"
import Contactlist from "./Components/Contactlist"
import Addingform from "./Components/Addingform"
import { useState,useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
  
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const[contactdata,setcontactdata]=useState( JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [])

  useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactdata))
  },[contactdata])

  let cinfopicker=(statedata)=>{
    setcontactdata([...contactdata,{ id:uuidv4(), ...statedata }]) ;
  }
  // console.log(contactdata)

const handledel=(id)=>{
  const newcondata= contactdata.filter((contact)=>{
     return contact.id !== id;
  })
  setcontactdata(newcondata);
}
// console.log(contactdata)

  return (
<div>
  <Header/>
  <div className="container px-6">
  <Addingform cinfopicker={cinfopicker}/>
  <Contactlist contactdatas={contactdata} handledelete={handledel}/>
  </div>
</div>
  )
}

export default App

