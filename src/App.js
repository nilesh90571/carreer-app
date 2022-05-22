import "./App.css";
import Form from './components/counseling/StepperForm'
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Table from "./components/Table/Table";
import Home from "./components/Admin/Page/Home";
import AddUser from "./components/Admin/users/AddUser";
import EditUser from "./components/Admin/users/EditUser";
import User from "./components/Admin/users/User";


function App() {
  return (
    <div>
      <Routes>
        
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Form />} />
      <Route path="/table" element={<Table />} />
      <Route path="/admin" element={<Home />} />
      <Route exact path="/users/add" element={<AddUser />} />
      <Route exact path="/users/edit/:id" component={EditUser} />
      <Route exact path="/users/:id" component={User} />
      </Routes>
    </div>
  );
}

export default App;
