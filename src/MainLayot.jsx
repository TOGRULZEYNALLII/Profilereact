import { Outlet } from "react-router-dom";
import Topbar from "./components/Content/Topbar";
import { Container } from "reactstrap";
import classNames from "classnames";

const MainLayout = ({ toggleSidebar, sidebarIsOpen }) => {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      <Topbar toggleSidebar={toggleSidebar} />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
