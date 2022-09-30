import React from 'react'
import Newcontact from './headerComp/Newcontact'

const Header = () => {
  return (
    <div className='flex justify-between p-5 items-center bg-slate-800'>
        <div className='text-white font-bold text-3xl'>Email-Book</div>
        <Newcontact/>
    </div>
  )
}

export default Header