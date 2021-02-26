import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header({ user, signOut }) {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="search..." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>{user.name}</Name>
        <UserImage onClick={signOut}>
          <img
            src={user.photo ? user.photo : "/static/bkdev.jpeg"}
            alt="user profile"
          />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  color: #fff;
  background-color: #350d36;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  margin-left: 16px;
`;
const SearchContainer = styled.div`
  min-width: 400px;
  margin-right: 16px;
  margin-left: 16px;
`;
const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104, 74, 104);
  border-radius: 6px;
  flex: 1;
  input {
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 4px 8px;
    color: #fff;
  }
  input:focus {
    outline: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;

const UserImage = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
  img {
    width: inherit;
    height: inherit;
    border-radius: 50%;
    object-fit: contain;
  }
`;

const Name = styled.div`
  padding-right: 12px;
`;
