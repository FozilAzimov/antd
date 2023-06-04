import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Components from "../components/Components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { navbar } from "../utils/navbar";
import { sidebar } from "../utils/sidebar";

const Root = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        {/* Components */}
        <Route element={<Components />}>
          <Route path="/components" element={<Sidebar />} />
        </Route>

        {/* Sidebar */}
        <Route element={<Sidebar />}>
          {sidebar.map((value) => (
            <Route key={value.id} path={value.path} element={value.element} />
          ))}
        </Route>

        {/* navbar */}
        {navbar.map((value) => (
          <Route key={value.id} path={value.path} element={value.element} />
        ))}

        <Route path={"/"} element={<Navigate to={"/components"} />} />

        <Route
          path={"*"}
          element={<button onClick={() => navigate(-1)}>go back</button>}
        />
      </Routes>
    </React.Fragment>
  );
};

export default Root;
