import './App.css';
import {useEffect, useState} from 'react';
import { Routes, Route, } from "react-router-dom";
import { Home, Post, AdminView, Login } from "./pages";

/*Routes between the different webpages*/
function App() {
  const [initialState, setInitialState] = useState([]);
  
  useEffect(() => {

  })
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/post" element={<Post />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/adminview" element={<AdminView />}/>
      </Routes>
    </div>
  );
}

export default App;

//confession
