import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path='/*' element={<HomePage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
    </Routes>
  );
}

export default App;
