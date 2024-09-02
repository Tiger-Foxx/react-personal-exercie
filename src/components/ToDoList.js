/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoList=()=>{
    return(
      <>  
      <h1 className="m-3">Liste de tâches</h1>
        <ul className="list-group m-3">
        <li className="list-group-item d-flex align-tiems-center">
          Ranger la vaisselle
          <button className="btn btn-sm ms-auto btn-outline-success">
            ✓
          </button>
         
        </li>
        <li className="list-group-item d-flex align-tiems-center">
          Répondre appel d'offres
          <button className="btn btn-sm ms-auto btn-outline-success">
            ✓
          </button>
        </li>
        <li className="list-group-item d-flex align-tiems-center">
          Signer contrat
          <button className="btn btn-sm ms-auto btn-outline-success">
            ✓
          </button>
        </li>
        <li className="list-group-item d-flex align-tiems-center">
          Ranger la salon
          <button className="btn btn-sm ms-auto btn-outline-success">
            ✓
          </button>
        </li>
      </ul>
      </>
    )
};

export default ToDoList;