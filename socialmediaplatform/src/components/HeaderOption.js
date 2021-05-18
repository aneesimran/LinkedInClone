import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <HeaderOptionContainer onClick={onClick}>
      {Icon && <Icon />}
      <h3>{title}</h3>
    </HeaderOptionContainer>
  );
}

export default HeaderOption;

const HeaderOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: gray;
  cursor: pointer;

  :hover {
    color: black;
  }

  > h3 {
    color: black;
    font-weight: 400;
    font-size: 12px;
    padding-top: 5px;
    margin-bottom: -5px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  object-fit: contain;
  height: 25px !important;
  width: 25px !important;
  margin-bottom: -2px;
`;
