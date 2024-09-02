/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckSquare, FaListAlt, FaPlusSquare, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Footer=()=>{  
    return(
        <footer
          className="d-flex justify-content-between bg-secondary p-3"
          id="mainFooter"
        >
          <div className="btn-group">
            <NavLink to="/" className="btn btn-outline-dark bg-light">
              <FaListAlt />
            </NavLink>
            <NavLink to="/completed"  className="btn btn-outline-dark bg-light">
              <FaCheckSquare />
            </NavLink>
            <NavLink to="/add-task" className="btn btn-outline-dark bg-light">
              <FaPlusSquare />
            </NavLink>
          </div>
          <button className="btn btn-outline-dark bg-light"><FaTrash /></button>
        </footer>
    );
 
};

export default Footer;