import React, { useContext } from 'react';
import { DataParentContext } from '../App';
import { Link } from 'react-router-dom';
const LogOutModal = ({setModalBtn}) => {
  const Context = useContext(DataParentContext);
 
  const guide=()=>{
   Context.setLoginDetails([])
    setModalBtn(false)
  }

  return (
    <div className='logoutClick'>
      <Link className="navlinks" to="/login"><div onClick={guide} className="done">Log Out</div></Link>
    </div>
  )
}

export default LogOutModal