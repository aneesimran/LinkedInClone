import React, { useState } from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ThumbsUpIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatOutlineIcon from "@material-ui/icons/ChatOutlined";
import ShareIcon from "@material-ui/icons/ShareOutlined";
import SendIcon from "@material-ui/icons/SendOutlined";

function Post({ name, description, message, photoUrl }) {
  return (
    <PostContainer>
      <PostHeader>
        <PostAvatar />
        <PostInfo>
          <h2>{name}</h2>
          <p>{description}</p>
        </PostInfo>
      </PostHeader>
      <PostBody>
        <p>{message}</p>
      </PostBody>
      <PostButtons>
        <InputOption Icon={ThumbsUpIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlineIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </PostButtons>
    </PostContainer>
  );
}

export default Post;

const PostContainer = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const PostHeader = styled.div`
  display: flex;
  margin-top: 10px;
`;

const PostInfo = styled.div`
  margin-left: 10px;
  > p {
    font-size: 12px;
    color: gray;
  }

  > h2 {
    font-size: 15px;
  }
`;

const PostBody = styled.div`
  overflow-wrap: anywhere;
  > p {
    padding-top: 15px;
  }
`;

const PostButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const PostAvatar = styled(Avatar)``;
