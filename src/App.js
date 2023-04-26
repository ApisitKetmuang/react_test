import { Routes, Route} from "react-router-dom";
import './App.css';
import Users from './Users';
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="create_draft" element={<UserCreate />} />
        <Route path="edit/:id" element={<UserEdit />} />
      </Routes>
      
    </div>
  );
}

export default App;
