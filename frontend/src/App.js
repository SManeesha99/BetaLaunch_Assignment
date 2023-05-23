import { BrowserRouter, Route, Routes } from "react-router-dom";

import  ViewEmployee from "./components/ViewEmployee";
import  AddEmployee from "./components/AddEmployee";
import  UpdateEmployee from "./components/UpdateEmployee";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewEmployee />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/update/:id" element={<UpdateEmployee />} />
        </Routes>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;
