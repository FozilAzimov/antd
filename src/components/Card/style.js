import styled from "styled-components";

const Item = styled.div`
  border: var(--border-width) var(--border-style) var(--border-color);
  border-radius: 5px;
  width: 100%;
  padding: 30px 15px 15px;
  transition: all 0.3s linear;
  :hover {
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.3s linear;
  }
  height: fit-content;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Body = styled.fieldset`
  border-top: var(--border-width) var(--border-style) var(--border-color);
  border-right: none;
  border-bottom: var(--border-width) dashed var(--border-color);
  border-left: none;
  padding-left: 15px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  margin: 10px 0;
  a {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  p {
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5;
    font-weight: 300;
    margin: 10px 0;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export { Item, Header, Body, Footer };
