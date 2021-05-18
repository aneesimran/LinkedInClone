import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <SidebarRecentItem>
      <SidebarHash>#</SidebarHash>
      <p>{topic}</p>
    </SidebarRecentItem>
  );

  return (
    <SidebarContainer>
      <SidebarTop>
        <img src="https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png" />
        <SidebarAvatar src={user.photoUrl}>{user.displayName[0]}</SidebarAvatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </SidebarTop>
      <SidebarStats>
        <SidebarStat>
          <p>Who viewed you</p>
          <StatNumber>42</StatNumber>
        </SidebarStat>
        <SidebarStat>
          <p>Views on post</p>
          <StatNumber>239</StatNumber>
        </SidebarStat>
      </SidebarStats>
      <SidebarBottom>
        <p>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("Programming")}
        {recentItem("Python")}
        {recentItem("AWS")}
        {recentItem("Google")}
      </SidebarBottom>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarRecentItem = styled.div`
  display: flex;
  font-size: 13px;
  color: gray;
  font-weight: bolder;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;

  :hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
  }
`;

const SidebarHash = styled.span`
  margin-left: 5px;
  margin-right: 10px;
`;

const SidebarContainer = styled.div`
  top: 80px;
  position: sticky;
  flex: 0.2;
  border-radius: 10px;
  height: fit-content;
  text-align: center;
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding-bottom: 10px;

  > img {
    margin-bottom: -20px;
    width: 100%;
    height: 60px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  > h4 {
    color: gray;
    font-size: 12px;
  }

  > h2 {
    font-size: 18px;
  }
`;

const SidebarBottom = styled.div`
  text-align: left;
  padding: 10px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  > p {
    padding-bottom: 7px;
    font-size: 15px;
  }
`;

const SidebarStats = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid lightgray;
`;

const SidebarStat = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  > p {
    color: gray;
    font-size: 13px;
    font-weight: 600;
  }
`;

const StatNumber = styled.p`
  font-weight: 700 !important;
  color: #0a66c2 !important;
`;

const SidebarAvatar = styled(Avatar)`
  margin-bottom: 10px;
  font-weight: 900;
`;
