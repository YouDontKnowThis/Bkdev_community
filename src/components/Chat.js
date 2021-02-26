import React, { useState, useEffect } from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import styled from "styled-components";
import { dtb } from "../firebase";
import { useParams } from "react-router-dom";

function Chat() {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getChannel = () => {
      dtb
        .collection("rooms")
        .doc(channelId)
        .onSnapshot((snapshot) => {
          setChannel(snapshot.data());
        });
    };
    getChannel();
  }, [channelId]);

  useEffect(() => {
    const getMessages = () => {
      dtb
        .collection("rooms")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          let messages = snapshot.docs.map((doc) => doc.data());
          setMessages(messages);
        });
    };
    getMessages();
  }, [channelId]);

  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName>{`# ${channel?.name}`}</ChannelName>
          <ChannelInfo>This is some channel info</ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <DetailsIcon />
        </ChannelDetails>
      </Header>
      <MesssageContainer>
        {messages?.map((data, idx) => (
          <ChatMessage
            name={data.user}
            text={data.text}
            image={data.userImg}
            timestamp={data.timestamp}
          />
        ))}
      </MesssageContainer>
      <ChatInput />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Header = styled.div`
  height: 64px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e7e5e5;
`;
const MesssageContainer = styled.div`
  flex: 1;
`;

const Channel = styled.div``;

const DetailsIcon = styled(ErrorOutlineIcon)`
  margin-left: 10px;
`;

const ChannelName = styled.div`
  font-weight: bold;
`;
const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;
const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`;
