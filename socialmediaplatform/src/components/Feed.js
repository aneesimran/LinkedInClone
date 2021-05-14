import React, { useState } from "react";
import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import Post from "./Post";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay";

function Feed() {
  //whenever we want to change posts, we use setposts to do so, this is a react hook (use state)
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <FeedContainer>
      <InputContainer>
        <InputFeed>
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </InputFeed>
        <InputOptions>
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalenderViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </InputOptions>
      </InputContainer>
      {/* everytime i have a post it will be rendered out */}
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="User Test"
        description="this is a test"
        message="wow this works"
      />
    </FeedContainer>
  );
}

export default Feed;

const InputOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: -15px;
`;

const FeedContainer = styled.div`
  flex: 0.6;
  margin: 0 20px;
`;

const InputContainer = styled.div`
  background-color: white;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const InputFeed = styled.div`
  border: 1px solid lightgray;
  border-radius: 30px;
  display: flex;
  padding: 10px;
  color: gray;
  padding-left: 15px;

  > form {
    display: flex;
    width: 100%;
  }

  > form > input {
    border: none;
    flex: 1;
    margin-left: 10px;
    outline-width: 0;
    font-weight: 600;
  }

  > form > button {
    display: none;
  }
`;
