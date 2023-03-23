import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink,
} from "shards-react";
import Cookie from "js-cookie"
export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
    this.state = {
      data:""
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible,
    });
  }


  render() {
    const details = Cookie.get('_auth_state')
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>

        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
         
          {details?<img
            className="user-avatar rounded-circle mr-2"
            src="https://img.freepik.com/free-vector/men-doing-business-flat-design_1212-110.jpg"
            alt="User Avatar"
          />:" "}{" "}
          <span className="d-none d-md-inline-block">{details?JSON.parse(details)?.name:""}</span>
        </DropdownToggle>
        {/* <Collapse tag={DropdownMenu} right small open={this.state.visible}>
           <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> Files
          </DropdownItem> 
           <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem> 
        </Collapse> */}
      </NavItem>
    );
  }
}
