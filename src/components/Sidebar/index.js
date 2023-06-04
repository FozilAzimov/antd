import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { sidebar } from "../../utils/sidebar";
import { Container, SidebarMenu } from "./style";

const Sidebar = () => {
  return (
    <>
      <Container>
        <SidebarMenu>
          {sidebar.map((value) => {
            return (
              <NavLink key={value.id} to={value.path}>
                {value.title}
              </NavLink>
            );
          })}
        </SidebarMenu>
        <Outlet />
      </Container>
    </>
  );
};

export default Sidebar;
