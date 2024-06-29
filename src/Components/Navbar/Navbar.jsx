import React, { useState } from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbMenuDeep } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const [display,setDisplay] = useState(false)
  const showMenu=()=>{
    setDisplay(true)
  }
  const hideMenu=()=>{
    setDisplay(false)
  }
  return (
    <nav className="n-container">
      <div className="nav_logo">LOGO</div>
      <div className="nav_items">
        <ul>
          <li>
            Qualifications
            <RiArrowDropDownLine fontSize={25} />
          </li>
          <li>
            Organisations
            <RiArrowDropDownLine fontSize={25} />
          </li>
          <li>
            Reach & Analysis
            <RiArrowDropDownLine fontSize={25} />
          </li>
          <li>
            Lorem ipsum
            <RiArrowDropDownLine fontSize={25} />
          </li>
          <li>
            Lorem ipsum
            <RiArrowDropDownLine fontSize={25} />
          </li>
          <li>
            <IoSearch color="white" fontSize={25} />
          </li>
          <li>
            <button className="button_1">Enrolment</button>
          </li>
        </ul>
      </div>
      <div className="hambergur" onClick={()=>setDisplay(!display)}>
        <TbMenuDeep  size={30}/>
      </div>

      {
        display?(
          <div className="dropDownMenu">
          <div className="cross_icon" onClick={hideMenu}><RxCross2 />
          </div>
          <ul>
            <li>Qualifications</li>
            <li>Organisations</li>
            <li>Reach & Analysis</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
    
            <li><button className="button_3">Enrolment</button></li>
          </ul>

      </div>
        ):(null)
      }


      
    </nav>
  );
};

export default Navbar;
