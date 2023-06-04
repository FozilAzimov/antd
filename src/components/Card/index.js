import React from "react";
import { Body, Footer, Header, Item } from "./style";
import tg from "../../assets/icons/tg.svg";
import yt from "../../assets/icons/yt.svg";
import git from "../../assets/icons/git.svg";

function Card({ children, type = "unknown", desc }) {
  return (
    <Item>
      <Header>{children}</Header>
      <Body>
        <legend>
          <a href="#">
            {type}
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="edit"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
            </svg>
          </a>
        </legend>
        <p>{desc}</p>
      </Body>
      <Footer>
        <a href="https://t.me/najmiddinnazarov" target="_blank">
          <img src={tg} alt="telegram" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCcdQF_weLLPD-MgFIRz1a5w"
          target="_blank"
        >
          <img src={yt} alt="youtube" />
        </a>
        <a href="https://github.com/najmiddinnazarov" target="_blank">
          <img src={git} alt="github" />
        </a>
      </Footer>
    </Item>
  );
}

export default Card;
