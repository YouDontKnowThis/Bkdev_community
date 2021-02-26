import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        const newUser = {
          name: res.user.displayName,
          photo: res.user.photoURL,
        };

        setUser(newUser);
        // Add Local Storage
        localStorage.setItem("user", JSON.stringify(newUser));
      })
      .catch((err) => {
        alert("Error >>> ", err.message);
      });
  };

  return (
    <Container>
      <Content>
        <Bkdevmg>
          <img src="/static/bkdev.jpeg" alt="" />
        </Bkdevmg>
        <h1>Login in</h1>
        <Button onClick={() => signIn()}>Sign in with Google</Button>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eee;
  display: grid;
  place-items: center;
`;
const Content = styled.div`
  background-color: #fff;
  padding: 100px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  h1 {
    color: #444;
  }
`;
const Bkdevmg = styled.div`
  width: 100px;
  img {
    width: inherit;
    height: 100px;
    border-radius: 50%;
    padding: 2px;
    background-color: #eee;
    border: 1px solid #ccc;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #5e1d5f;
  color: #fff;
  border-radius: 4px;
  border: none;
  margin-top: 30px;
  transition: backgroud 0.4s ease;
  cursor: pointer;
  :hover {
    background-color: #3f0e40;
  }
  :focus {
    outline: none;
  }
`;
