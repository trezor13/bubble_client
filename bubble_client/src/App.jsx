import "./App.css";
import LoginScreen from "./pages/LoginScreen";
import { Route, Routes } from "react-router-dom";
import RegisterScreen from "./pages/RegisterScreen";

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
