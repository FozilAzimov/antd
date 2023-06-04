import styled from "styled-components";

const checkPx = (typePx) => {
  return `${parseFloat(typePx)}px`;
};

const checkBg = (bg) => {
  switch (bg) {
    case "primary":
      return "var(--color-primary)";
    case "danger":
      return "var(--color-danger)";
    case "warning":
      return "var(--color-warning)";
    case "success":
      return "var(--color-success)";
    case "dark":
      return "var(--color-dark)";
    case "text":
      return "transparent";
    case "link":
      return "transparent";
    case "dangerLink":
      return "transparent";
    case "dangerText":
      return "transparent";
    case "default":
      return "transparent";
    case "bgDisabled":
      return "transparent";
    default:
      return "transparent";
  }
};

const checkBorderStyle = (borderStyle) => {
  switch (borderStyle) {
    case "dashed":
      return "dashed";
    case "default":
      return "var(--border-style)";
    default:
      return "var(--border-style)";
  }
};

const checkBorderColor = (borderColor) => {
  switch (borderColor) {
    case "text":
      return "transparent";
    case "dangerText":
      return "transparent";
    case "link":
      return "transparent";
    case "dangerLink":
      return "transparent";
    case "danger":
      return "var(--color-danger)";
    case "bgDisabled":
      return "transparent";
    case "ghost":
      return "white";
    default:
      return "var(--border-color)";
  }
};

const checkSize = (size) => {
  switch (size) {
    case "large":
      return { width: "110px", height: "40px", fontSize: "16px" };
    case "default":
      return { width: "110px", height: "35px", fontSize: "14px" };
    case "small":
      return { width: "110px", height: "24px", fontSize: "14px" };
    default:
      return { width: "110px", height: "35px", fontSize: "14px" };
  }
};

const ButtonItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: ${({ sizebtn }) => (sizebtn ? checkSize(sizebtn).width : "110px")};
  height: ${({ sizebtn }) => (sizebtn ? checkSize(sizebtn).height : "35px")};
  width: ${({ width }) => (width ? checkPx(width) : checkPx(width))};
  height: ${({ height }) => (height ? checkPx(height) : checkPx(height))};
  font-size: ${({ sizebtn }) =>
    sizebtn ? checkSize(sizebtn).fontSize : "14px"};
  background-color: ${({ bg }) => (bg ? checkBg(bg) : "transparent")};
  color: ${({ bg }) =>
    bg === "primary" ||
    bg === "danger" ||
    bg === "success" ||
    bg === "dark" ||
    bg === "ghost"
      ? "white"
      : bg === "bgDisabled"
      ? "rgba(0, 0, 0, 0.25)"
      : bg === "dangerDefault"
      ? "var(--color-danger)"
      : bg === "dangerLink"
      ? "var(--color-danger)"
      : bg === "dangerText"
      ? "var(--color-danger)"
      : bg === "link"
      ? "var(--color-primary)"
      : "black"};
  border-width: var(--border-width);
  border-style: ${({ borderStyle }) =>
    borderStyle ? checkBorderStyle(borderStyle) : "var(--border-style)"};
  border-color: ${({ borderColor }) =>
    borderColor ? checkBorderColor(borderColor) : "var(--border-color)"};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? checkPx(borderRadius) : "6px"};
  cursor: ${({ bg }) => (bg === "bgDisabled" ? "not-allowed" : "pointer")};
  :disabled {
    cursor: not-allowed;
    opacity: 0.7;
    border-color: #d9d9d9;
    color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.04);
    box-shadow: none;
  }
  transition: all 0.3s linear;
  // hover
  :hover {
    opacity: 0.7;
    color: ${({ bg }) =>
      bg === "primary" || bg === "danger" || bg === "success" || bg === "dark"
        ? "white"
        : bg === "text"
        ? "var(--color-dark)"
        : bg === "dangerLink"
        ? "var(--color-danger)"
        : bg === "dangerText"
        ? "white"
        : bg === "defaultDanger"
        ? "var(--color-danger)"
        : bg === "disabled"
        ? "rgba(0, 0, 0, 0.25)"
        : bg === "dangerDefault"
        ? "var(--color-danger)"
        : bg === "bgDisabled"
        ? "rgba(0, 0, 0, 0.25)"
        : "var(--color-primary)"};
    border-style: ${({ borderStyle }) =>
      borderStyle ? checkBorderStyle(borderStyle) : "var(--border-style)"};
    border-color: ${({ bg }) =>
      bg === "primary" || bg === "danger" || bg === "success" || bg === "dark"
        ? "transparent"
        : bg === "text"
        ? "var(--color-text)"
        : bg === "dangerText"
        ? "var(--color-danger)"
        : bg === "defaultDanger"
        ? "var(--color-danger)"
        : bg === "link"
        ? "transparent"
        : bg === "dangerLink"
        ? "transparent"
        : bg === "disabled"
        ? "rgb(217, 217, 217)"
        : bg === "bgDisabled"
        ? "transparent"
        : bg === "dangerDefault"
        ? "var(--color-danger)"
        : "var(--color-primary)"};
    background-color: ${({ bg }) =>
      bg === "success" || bg === "dark"
        ? "transparent"
        : bg === "text"
        ? "var(--color-text)"
        : bg === "danger"
        ? "var(--color-danger)"
        : bg === "dangerText"
        ? "var(--color-danger)"
        : bg === "primary"
        ? "var(--color-primary)"
        : bg === "disabled"
        ? "rgba(0, 0, 0, 0.04)"
        : "transparent"};
    transition: all 0.3s linear;
  }
  // active
  :active {
    opacity: 1;
    transition: all 0.3s linear;
  }
`;

const PreviewFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const ButtonOption = styled.div`
  display: flex;
  align-items: center;
  button {
    border: var(--border-width) var(--border-style) var(--border-color);
    background-color: transparent;
    padding: 9px 25px;
    font-size: 14px;
    :first-child {
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
    }
    :last-child {
      border-top-right-radius: 7px;
      border-bottom-right-radius: 7px;
    }
    :hover {
      opacity: 0.7;
      color: var(--color-primary);
    }
    :active {
      opacity: 1;
    }
    :focus {
      color: var(--color-primary);
      border: var(--border-width) var(--border-style) var(--color-primary);
    }
  }
`;

const PreviewLine = styled.fieldset`
  border-top: 2px var(--border-style) var(--border-color);
  border-right: none;
  border-bottom: none;
  border-left: none;
  padding-left: 15px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  legend {
    padding: 0 5px;
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  div {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }
`;

const GhostBg = styled.div`
  background-color: rgb(190, 200, 200);
  padding: 16px;
  width: 80%;
  flex-direction: row !important;
  gap: 15px !important;
  margin-bottom: 20px;
`;

const MultipleFlex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
`;

const PositionButton = styled.div`
  width: 32px;
  height: 100%;
  position: relative;
`;

const ActionButton = styled.button`
  width: 100%;
  height: 100%;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
  :hover {
    opacity: 0.6;
    transition: all 0.3s linear;
    color: var(--color-primary);
    border-color: var(--color-primary);
  }
  /* :hover ~ #menu {
    opacity: 1;
    visibility: visible;
  } */
  :focus ~ #menu {
    opacity: 1;
    visibility: visible;
  }
  :active {
    opacity: 1;
  }
`;

const ButtonGroup = styled.div`
  position: absolute;
  top: 38px;
  right: 0;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.6);
  width: 90px;
  height: fit-content;
  padding: 3px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s linear;
  span {
    padding: 6px;
    display: block;
    width: 100%;
    text-align: center;
    font-weight: 400;
    transition: all 0.3s linear;
    border-radius: 6px;
    cursor: pointer;
    :hover {
      transition: all 0.3s linear;
      background-color: var(--color-text);
    }
  }
`;

const GhostButton = styled.div`
  background-color: rgb(190, 200, 200);
  padding: 16px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const SizeFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Loading = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  margin-right: 5px;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export {
  ButtonItem,
  PreviewFlex,
  ButtonOption,
  PreviewLine,
  Flex,
  GhostBg,
  Loading,
  MultipleFlex,
  PositionButton,
  ActionButton,
  ButtonGroup,
  GhostButton,
  SizeFlex,
};
