import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class ToDo extends React.Component{
    state={
        completed:this.props.task.completed,
    };
    toggleComplete=()=>{
      //this.props.task.completed=!this.props.task.completed;
        this.setState((prevState)=>({completed:!prevState.completed}));

       // alert(this.props.task.id);
        this.props.onToggleCompleted(this.props.task.id);
    }

    render(){

        return(

        <li className={"list-group-item d-flex align-tiems-center " + (this.state.completed ? "bg-success" : null)} >
          {this.props.task.name}
          <button className={"btn btn-sm ms-auto " + (this.state.completed ? "btn-success" : 'btn-outline-success')} onClick={this.toggleComplete}>
            ✓
          </button>
         
        </li>

    )
    }
}



export default ToDo;