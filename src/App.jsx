import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import "./components/Sidebar/Sidebar";
import SideBar from "./components/Sidebar/Sidebar.jsx";
import Topbar from "./components/Content/Topbar.jsx";
import { useState } from "react";
import Profile from "./pages/Profile/Profile.jsx";
import Worker from "./pages/Workers/Worker.jsx";
import MainLayout from "./MainLayot.jsx";
function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const routes = [
    {
      element: <MainLayout toggleSidebar={toggle} sidebarIsOpen={isOpen} />,
      path: "/",
      children: [
        {
          element: <Profile />,
          path: "/profile",
        },
        {
          element: <Worker />,
          path: "/workers",
        },
      ],
    },
  ];

  const Elements = () => {
    return useRoutes(routes);
  };

  return (
    <>
      <BrowserRouter>
        <div className="App wrapper">
          <SideBar isOpen={isOpen} toggle={toggle} />
          <Elements />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
