import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

class AddTask extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.newTask.value);
        
        alert("Nouvelle tache : " + this.newTask.value);
                
        this.newTask.value = ''; // Clear input field after form submission
        this.props.navigate('/'); // Use the navigate prop passed from the HOC
    };

    render() {
        return (
            <section>
                <h1 className="m-3">Nouvelle tâche</h1>
                <div className="card mx-3 m-3">
                    <form className="card-body" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="taskName">Nom de la tâche</label>
                            <input
                                type="text"
                                className="form-control"
                                name="taskName"
                                id="taskName"
                                required
                                ref={input => this.newTask = input}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary m-3 mx-0">Créer</button>
                    </form>
                </div>
            </section>
        );
    }
}

// Create a HOC to pass navigate as a prop
export default function WithNavigate(props) {
    const navigate = useNavigate();
    return <AddTask {...props} navigate={navigate} />;
}



// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const AddTask = ({ addTask }) => {
//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addTask(e.target.taskName.value); // Access input value directly
//         alert("Nouvelle tache : " + e.target.taskName.value);
//         e.target.taskName.value = ''; // Clear input field
//         navigate('/'); // Redirect to the home route
//     };

//     return (
//         <section>
//             <h1 className="m-3">Nouvelle tâche</h1>
//             <div className="card mx-3 m-3 ">
//                 <form className="card-body" onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="taskName">Nom de la tâche</label>
//                         <input type="text" className="form-control" name="taskName" id="taskName" required />
//                     </div>
//                     <button type="submit" className="btn btn-primary m-3 mx-0">Créer</button>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default AddTask;
