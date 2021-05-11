import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img src="https://www.flaticon.com/svg/vstatic/svg/4506/4506376.svg?token=exp=1620663448~hmac=fd1917e681e99384f1b05259225453c7" />
        <HeaderSearch>
          <SearchIcon />
          <input type="text" />
        </HeaderSearch>
      </HeaderLeft>

      <HeaderRight></HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderLeft = styled.div`
  display: flex;
  > img {
    object-fit: contain;
    height: 40px;
    margin-right: 10px;
  }
`;

const HeaderRight = styled.div``;

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
