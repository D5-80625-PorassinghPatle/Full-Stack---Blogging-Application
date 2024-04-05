import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appWrite/auth.js";
import { login, logout } from "./store/authSlice.js";
import { Outlet } from "react-router-dom";

function App() {
  //we will create a Loading state as the databse is not local to machine
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-500">
      <div className="w-full block">
        <Header></Header>
        <main>{/*<Outlet/> */}</main>
      </div>
    </div>
  ) : null;
}

export default App;
