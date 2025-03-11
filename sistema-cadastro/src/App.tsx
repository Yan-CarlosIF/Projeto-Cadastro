import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import UserProvider from "./contexts/userContextProvider";

const App = () => {
  return (
    <div className="bg-[var(--primary-color)] h-screen w-screen flex justify-center items-center p-5">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
};

export default App;
