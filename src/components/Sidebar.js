import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import { sidebarItems } from "../data/SidebarData";
import { useHistory } from "react-router-dom";
import { dtb } from "../firebase";

function Sidebar({ rooms }) {
  const history = useHistory();

  const addNewChannel = () => {
    const channelName = prompt("Enter Channel Name");
    if (channelName === "") return;
    dtb.collection("rooms").add({
      name: channelName,
    });
  };

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

  return (
    <Container>
      <WorkSpaceContainer>
        <Name>BKDEV</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {sidebarItems.map((item) => {
          return (
            <MainChannel key={item.id}>
              {item.icon}
              <span>{item.label}</span>
            </MainChannel>
          );
        })}
      </MainChannels>
      <ChannelContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon onClick={addNewChannel} />
        </NewChannelContainer>
        <ChannelList>
          {rooms?.map((room) => {
            return (
              <Channel
                key={room.id}
                onClick={() => goToChannel(room.id)}
              >{`# ${room.name}`}</Channel>
            );
          })}
        </ChannelList>
      </ChannelContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background-color: #3f0e40;
`;

const WorkSpaceContainer = styled.div`
  color: #fff;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 1px solid #532753;
`;
const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background-color: #fff;
  border-radius: 50%;
  color: #350d36;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannel = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  color: rgb(188, 171, 188);
  padding-left: 19px;
  cursor: pointer;
  span {
    flex: 1;
    padding-left: 12px;
  }
  :hover {
    background-color: #350d36;
  }
`;

const ChannelContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;
const NewChannelContainer = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #532753;
`;

const ChannelList = styled.div``;
const Channel = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background-color: #350d36;
  }
`;
