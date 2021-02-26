import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import { dtb, auth, provider } from "./firebase";
import "./App.css";

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const getRoomsFromFirestore = () => {
      dtb.collection("rooms").onSnapshot((snapshot) => {
        setRooms(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              name: doc.data().name,
            };
          })
        );
      });
    };
    getRoomsFromFirestore();
  }, []);

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem("user");
    });
  };
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header user={user} signOut={signOut} />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat />
                </Route>
                <Route path="/">Select or Create a New Channel</Route>
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 39px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
