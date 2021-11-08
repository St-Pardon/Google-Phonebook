import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineArrowBack } from 'react-icons/md';

const Header = ({switchView, changeView}) => {


  return(
    <header className="header">
      {switchView === "home" && <div className="search-div">
        <AiOutlineMenu  />
        <input placeholder="Search contacts" />
        <FiMoreVertical />
        <FaRegUserCircle />
      </div>}
      {switchView === "add" && <div className="form-header">
        <AiOutlineClose onClick={()=>changeView("home")}fontSize="20px" cursor="pointer"/>
        <p>Create contact</p>
        <input type="submit" value="Save" form="add-contact"/>
        <FiMoreVertical />
      </div>}
      {switchView === "details" && <div className="details-header">
        <MdOutlineArrowBack fontSize="23px" cursor="pointer" onClick={()=> changeView("home")}/>
        <FiMoreVertical />
      </div>}
    </header>
  )
}

export default Header;
