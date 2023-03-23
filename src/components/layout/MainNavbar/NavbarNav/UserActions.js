import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink,
} from "shards-react";
import Cookie from "js-cookie";

const UserActions = () => {
  const [user, setUser] = useState();
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const logout = () => {
    Cookie.remove("_auth_state");
    history.push("/login");
  };

  const toggleUserActions = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    setUser(Cookie.get("_auth_state"));
  }, []);

  return (
    user && (
      <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src="https://img.freepik.com/free-vector/men-doing-business-flat-design_1212-110.jpg"
            alt="User Avatar"
          />
          <span className="d-none d-md-inline-block">
            {user ? JSON.parse(user)?.name : ""}
          </span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={visible}>
          <DropdownItem onClick={logout} className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    )
  );
};

export default UserActions;
