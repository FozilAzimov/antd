import React from "react";
import { navbar } from "../../utils/navbar";
import telegram from "../../assets/icons/tg.svg";
import youtube from "../../assets/icons/yt.svg";
import git from "../../assets/icons/git.svg";
import { Contact, Container, Link, Logo, Menu, Wrapper } from "./style";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Logo path="/components">Ant Design Template</Logo>
        <Menu>
          {navbar.map((value) => {
            return (
              <Link key={value.id} to={value.path}>
                {value.title}
              </Link>
            );
          })}
          <Contact>
            <h3>Najmiddin Nazarov</h3>
            <a href="https://t.me/najmiddinnazarov" target="_blank">
              <img src={telegram} alt="telegram" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCcdQF_weLLPD-MgFIRz1a5w"
              target="_blank"
            >
              <img src={youtube} alt="youtube" />
            </a>
            <a href="https://github.com/najmiddinnazarov" target="_blank">
              <img src={git} alt="git" />
            </a>
          </Contact>
        </Menu>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
