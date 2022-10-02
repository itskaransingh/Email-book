import React from 'react'
import Contactcard from './listcomp/Contactcard'
// import {usecontextapi} from '../context/contextapi'
// import {useEffect} from 'react';

const Contactlist = ({ contactdatas,handledelete }) => {
  // const{Contactss,retrievedata}= usecontextapi()

 const delconhandler = (id) => {
  handledelete(id)
 }

//  useEffect(()=>{
//   retrievedata()
//  },[])

const renderlist = contactdatas.map((con)=>{
  
  return(
  <Contactcard con={con} del={delconhandler} id={con.id} key={con.id}/>
);});

  return (
    <div>
      {renderlist}
    </div>
  )
}

export default Contactlist