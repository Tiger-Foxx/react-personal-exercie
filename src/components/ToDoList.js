/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './ToDo';
import { useParams } from 'react-router-dom';


const ToDoList=({tasks,match,onToggleCompleted})=>{
    const { filter } = useParams();
    let TaskFiltered;
    switch (filter) {
      case 'completed':
        TaskFiltered = tasks.filter((task) => task.completed===true);
        break;
    
      default:
        TaskFiltered = tasks;
     
    }
    return(
      <>  
      <h1 className="m-3">Liste de tâches</h1>
        <ul className="list-group m-3">
        {/* Utiliser map pour parcourir les tâches et rendre le composant ToDo pour chaque tâche */}
        {TaskFiltered.map((task) => (
          <ToDo key={task.id} task={task}  onToggleCompleted = {onToggleCompleted} />
        ))}
       
      </ul>
      </>
    )
};

export default ToDoList;