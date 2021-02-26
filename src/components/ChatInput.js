import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import MoodIcon from "@material-ui/icons/Mood";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

function ChatInput() {
  const [showEmojies, setShowEojies] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <Container>
      <InputCntainer>
        <form>
          <input type="text" name="" placeholder="message here..." />
          <Mood onClick={() => setShowEojies(!showEmojies)} />
          <SendButton>
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
const SendButton = styled.div``;
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
