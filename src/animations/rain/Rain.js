import React, {useState} from 'react';
import styled from "styled-components";
import "./Rain.css";
import {useInterval} from "react-use";

function Rain() {
    const [emojisToRender, setEmojisToRender] = useState([{
        key: 0,
        emoji: "",
        offset: 0
    }]);

    useInterval(() => {
        if (emojisToRender.length > 20) {
            emojisToRender.shift();
        }

        const offset = Math.floor(Math.random() * 1200);
        const key = offset + Math.floor(Math.random() * 100000);
        const emoji = "💧";

        emojisToRender.push({offset, key, emoji})
        setEmojisToRender([...emojisToRender]);
    }, 100);

    return (
        // <div className="rain-page">
        <div>
            <SuperContainer>
                {emojisToRender.map(({key, emoji, offset}) => {
                    return (
                        <EmojiContainer key={key} offset={offset}>
                            {emoji}
                        </EmojiContainer>
                    );
                })}
            </SuperContainer>
        </div>
    );
}

export default Rain;

const SuperContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const EmojiContainer = styled.div`
  @keyframes falldown {
    0% {
      margin-top: 0;
    }
    100% {
      margin-top: 100vh;
    }
  }

  position: absolute;
  top: 0px;
  left: ${props => props.offset}px;

  font-size: 1.5em;
  animation-name: falldown;
  animation-duration: 4s;
`;