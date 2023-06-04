import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
  margin-bottom: 20px;
`;

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(NavLink)`
  color: var(--color-dark);
  font-size: 28px;
  font-weight: 700;
  width: 22%;
  display: flex;
  border-right: 1px solid var(--line-color);
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

const Link = styled(NavLink)`
  color: var(--color-dark);
  font-size: 18px;
`;

const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 600;
    color: var(--color-dark);
  }
  a {
    margin-left: 10px;
  }
`;

export { Wrapper, Container, Logo, Menu, Link, Contact };
