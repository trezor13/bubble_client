import "./App.css";
import LoginScreen from "./pages/LoginScreen";
import { Route, Routes } from "react-router-dom";
import RegisterScreen from "./pages/RegisterScreen";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:3000/api/v1";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <div className="h-[750px]">
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
