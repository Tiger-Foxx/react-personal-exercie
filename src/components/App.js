/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './ToDoList';
import Footer from './NavBar';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import AddTask from './AddTask';
import { Button as ButtonN }  from '@nextui-org/react' ;
class App extends React.Component {
  render() {
    return (
      <section id="todo">
          
          <BrowserRouter>
            <Routes>
              <Route path="/:filter?" element={<ToDoList />} />
              <Route path="/add-task" element={<AddTask />} />
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


