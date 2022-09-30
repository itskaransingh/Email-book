import React from 'react'
// import { render } from 'react-dom'
import Contactcard from './listcomp/Contactcard'

const Contactlist = ({ contactdatas,handledelete }) => {

 const delconhandler = (id) => {
  handledelete(id)
 }

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