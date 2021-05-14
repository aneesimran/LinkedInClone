import React from "react";
import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";

function Feed() {
  return (
    <FeedContainer>
      <InputContainer>
        <InputFeed>
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
          <InputOptions>
            <InputOptions />
          </InputOptions>
        </InputFeed>
      </InputContainer>
    </FeedContainer>
  );
}

export default Feed;

const InputOptions = styled.div``;

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
