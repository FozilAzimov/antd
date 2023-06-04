import styled from "styled-components";

const Container = styled.div`
  max-width: 1350px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const SidebarMenu = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--line-color);
  a {
    padding: 9px 0;
    margin: 2px 5px 0;
    display: inline-block;
    border-radius: 8px;
    transition: all 0.3s linear;
    :hover {
      background-color: rgba(0, 0, 0, 0.06);
      transition: all 0.3s linear;
      padding-left: 13px;
      font-weight: 400;
    }
    :focus {
      background-color: #e6f4ff;
      color: #1677ff;
      padding-left: 13px;
      font-weight: 400;
    }
  }
  .active {
    background-color: #e6f4ff;
    color: #1677ff;
    padding-left: 13px;
    font-weight: 400;
  }
`;

export { Container, SidebarMenu };
