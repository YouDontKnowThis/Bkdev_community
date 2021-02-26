import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import MoodIcon from "@material-ui/icons/Mood";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

function ChatInput({ sendMessage }) {
  const [showEmojies, setShowEojies] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [input, setInput] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const send = (e) => {
    e.preventDefault();
    if (input === "") return;
    sendMessage(input);
    setInput("");
  };

  return (
    <Container>
      <InputCntainer>
        <form>
          <input
            type="text"
            value={input}
            placeholder="message here..."
            onChange={(e) => setInput(e.target.value)}
          />
          <Mood onClick={() => setShowEojies(!showEmojies)} />
          <SendButton onClick={send} type="submit">
            <SendIconMessage />
          </SendButton>
          {showEmojies ? (
            <Picker
              onEmojiClick={onEmojiClick}
              skinTone={SKIN_TONE_MEDIUM_DARK}
              pickerStyle={{ position: "absolute", bottom: "10%", right: "1%" }}
            />
          ) : null}
        </form>
      </InputCntainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`;

const InputCntainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;
  form {
    display: flex;
    align-items: center;
    height: 42px;
    padding-left: 10px;
    padding-right: 10px;

    input {
      height: 100%;
      flex: 1;
      font-size: 13px;
      border: none;
      background-color: transparent;
    }

    input:focus {
      outline: none;
    }
  }
`;
const SendButton = styled.button`
  border: none;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;
const SendIconMessage = styled(SendIcon)`
  color: #532753;
  cursor: pointer;
  :hover {
    color: #3f0e40;
  }
`;

const Mood = styled(MoodIcon)`
  color: #999;
  margin-right: 5px;
  margin-top: -4px;
  cursor: pointer;
  transition: all 0.4s ease;
  :hover {
    color: #333;
  }
`;
