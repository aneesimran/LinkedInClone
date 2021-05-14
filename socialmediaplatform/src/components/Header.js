import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Logo from "../img/connection.png";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img src={Logo} />
        <HeaderSearch>
          <SearchIcon />
          <input type="text" />
        </HeaderSearch>
      </HeaderLeft>

      <HeaderRight>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={ChatIcon} title="Chat" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://pbs.twimg.com/profile_images/1254895625801535490/W680hT0d_400x400.jpg"
          title="me"
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
`;

const HeaderLeft = styled.div`
  display: flex;
  > img {
    object-fit: contain;
    height: 40px;
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
