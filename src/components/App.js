/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './ToDoList';
import Footer from './NavBar';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import AddTask from './AddTask';
import { Button as ButtonN }  from '@nextui-org/react' ;
import initialData from './../initialData';
import uniqueId from "uniqueid";
class App extends React.Component {
  state={
    tasks: initialData,
  };
  onToggleCompleted=(taskId)=>{
    //alert(taskId)
    let taskToUpdate= this.state.tasks.find(task => task.id === taskId);
    //alert(taskToUpdate.name);
    taskToUpdate.completed=!taskToUpdate.completed;
    this.setState((prevState)=>{
      prevState.tasks.map((task)=>{
        if(task.id===taskToUpdate.id){
          return taskToUpdate;
        }
        return task;
      })
    });
  }
  addTask=(TaskName)=>{
    // Générer un id unique pour la nouvelle tâche
    const newTaskId = uniqueId();
    // Ajouter la nouvelle tâche dans le state
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, { id: newTaskId, name: TaskName, completed: false }]
    }));
  };
  render() {
    return (
      <section id="todo">
          
          <BrowserRouter>
            <Routes>
              {/* <Route path="/:filter?" element={<ToDoList />}  /> */}
              <Route path="/:filter?" element={<ToDoList tasks={this.state.tasks} onToggleCompleted= {this.onToggleCompleted} />} />
              <Route path="/add-task" element={<AddTask  addTask={this.addTask} />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        
    <ButtonN color="primary" className="m-3">
      Button
    </ButtonN>
      </section>
    );
  };
};

export default App;


