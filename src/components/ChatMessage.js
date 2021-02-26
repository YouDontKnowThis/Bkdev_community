import React from "react";
import styled from "styled-components";

function ChatMessage({ text, name, image, timestamp }) {
  return (
    <Container>
      <UserAvatar>
        <img src={image} alt="" />
      </UserAvatar>
      <MessageContent>
        <Name>
          {name} <span>{new Date(timestamp.toDate()).toUTCString()}</span>
        </Name>
        <Text>{text}</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  background-color: #eee;
  margin: 10px;
  width: max-content;
  max-width: 400px;
  border-radius: 5px;
`;
const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  margin-right: 10px;
  overflow: hidden;
  img {
    width: inherit;
  }
`;
const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;
  span {
    margin-left: 5px;
    font-weight: 400;
    color: #666;
  }
`;
const Text = styled.span``;
