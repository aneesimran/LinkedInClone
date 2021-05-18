import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Logo from "../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutofApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <img src={Logo} />
        <HeaderSearch>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </HeaderSearch>
      </HeaderLeft>

      <HeaderRight>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={ChatIcon} title="Chat" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          Icon={ExitToAppIcon}
          title="Logout"
          onClick={logoutofApp}
        />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0.1px solid lightgray;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
`;

const HeaderLeft = styled.div`
  display: flex;
  > img {
    object-fit: contain;
    height: 41px;
    margin-right: 10px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
`;

const HeaderSearch = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 22px;
  color: grey;
  background-color: #eef3f8;

  > input {
    outline: none;
    border: none;
    background: none;
  }
`;
