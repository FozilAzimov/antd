import styled from "styled-components";

const checkSize = (size) => {
  if (size === "large") return "40px";
  else if (size === "small") return "24px";
  else if (size === "default") return "32px";
  else return "32px";
};

const checkBorderColor = (borderColor) => {
  if (borderColor === "danger") return "var(--color-danger)";
  else if (borderColor === "default") return "var(--border-color)";
  else return "var(--border-color)";
};

const checkHoverBorderColor = (hoverBorderColor) => {
  if (hoverBorderColor === "primary") return "var(--color-primary)";
  else if (hoverBorderColor === "danger") return "var(--color-danger)";
  else return "var(--color-primary)";
};

const checkFocusShadowColor = (focusShadowColor) => {
  if (focusShadowColor === "primary") return "0 0 0 2px rgba(5,145,255,.1)";
  else return "0 0 0 2px rgba(5,145,255,.1)";
};

const checkPlaceholderFontSize = (placeholderFontSize) => {
  if (placeholderFontSize === "large") return "16px";
  else if (placeholderFontSize === "small") return "12px";
  else if (placeholderFontSize === "default") return "13px";
  else return "13px";
};

const checkDisabled = (disabled) => {
  if (disabled === "disabled") return "#d9d9d9";
};

const UserFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  input {
    padding-left: 28px;
  }
  svg {
    position: absolute;
    z-index: 2;
    top: 16px;
    left: 13px;
  }
  #warning-icon {
    left: auto;
    right: 12px;
    top: 13px;
  }
`;

const UrlFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 10px;
  input {
    margin: 0;
    border-radius: 0;
  }
  span:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    padding: 0 11px;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.02);
    border: 1px solid #d9d9d9;
    line-height: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 0 11px;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.02);
    border: 1px solid #d9d9d9;
    line-height: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  select:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    padding: 0 11px;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.02);
    border: 1px solid #d9d9d9;
    line-height: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  select:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 0 11px;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.02);
    border: 1px solid #d9d9d9;
    line-height: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  #rmbBtn {
    border-left: none;
    border-right: none;
  }
  #rmb {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    padding: 0px 11px;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: #fff;
    border: 1px solid rgb(217, 217, 217);
    line-height: 1;
    height: 100%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-right: none;
  }
  #rmb2 {
    border-left: none;
    background-color: #fff;
  }
`;

const InputsFlex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 10px;
  input {
    margin: 0;
  }
  input:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  input:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  span {
    padding: 0 11px;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.02);
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    line-height: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  button {
    padding: 0 11px;
    border: 1px solid #d9d9d9;
    line-height: 1;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transition: all 0.3s linear;
    :hover {
      transition: all 0.3s linear;
      border: 1px solid var(--color-primary);
      opacity: 0.6;
      svg {
        transition: all 0.2s linear;
        fill: var(--color-primary);
      }
    }
    :active {
      opacity: 1;
    }
  }
  #currentHover:hover {
    svg {
      fill: white !important;
    }
  }
  #firstSpinHover:hover {
    cursor: default;
    #firstLoadingHover {
      border-top-color: var(--color-primary) !important;
    }
  }
  #secondSpinHover {
    cursor: default;
    background-color: var(--color-primary);
    :hover {
      opacity: 0.6;
    }
    :active {
      opacity: 1;
    }
    #secondLoadingHover {
      border-top-color: #fff !important;
    }
  }
  #thirdSpinHover {
    cursor: default;
    background-color: var(--color-primary);
    span {
      color: #fff;
      font-size: 17px;
      border: 0;
    }
    :hover {
      opacity: 0.6;
    }
    :active {
      opacity: 1;
    }
    #thirdLoadingHover {
      border-top-color: #fff !important;
    }
  }
`;

const SettingFlex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 10px;
  input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin: 0;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 11px;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.02);
    border: 1px solid #d9d9d9;
    transition: all 0.3s;
    line-height: 1;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    height: 100%;
  }
`;

const MicrophoneFlex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 10px;
  position: relative;
  input {
    margin: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  span {
    position: absolute;
    right: 90px;
    top: 13px;
    svg {
      fill: var(--color-primary);
    }
  }
  button {
    border-color: transparent;
    :hover {
      transition: all 0.3s linear;
      opacity: 0.6;
    }
    :active {
      opacity: 1;
    }
  }
`;

const Loading = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const TextareaFlex = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    right: 15px;
    top: 10px;
    fill: gray;
    cursor: pointer;
  }
  .countInput {
    position: absolute;
    right: 15px;
    top: 5px;
    color: rgba(0, 0, 0, 0.45);
  }
  .countingTextarea {
    position: absolute;
    bottom: -20px;
    right: 0;
    color: rgba(0, 0, 0, 0.45);
  }
`;

const InputItem = styled.input`
  margin: 5px 5px;
  padding: 0 10px;
  border-radius: 8px;
  transition: all 0.3s linear;
  width: 100%;
  height: ${({ size }) => (size ? checkSize(size) : "32px")};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ borderColor }) =>
    borderColor ? checkBorderColor(borderColor) : "var(--border-color)"};
  :hover {
    transition: all 0.3s linear;
    border-color: ${({ hoverBorderColor }) =>
      hoverBorderColor
        ? checkHoverBorderColor(hoverBorderColor)
        : "var(--color-primary)"};
  }
  :focus {
    box-shadow: ${({ focusShadowColor }) =>
      focusShadowColor
        ? checkFocusShadowColor(focusShadowColor)
        : "0 0 0 2px rgba(5,145,255,.1)"};
    border-color: ${({ hoverBorderColor }) =>
      hoverBorderColor
        ? checkHoverBorderColor(hoverBorderColor)
        : "var(--color-primary)"};
  }
  ::placeholder {
    font-size: ${({ placeholderFontSize }) =>
      placeholderFontSize
        ? checkPlaceholderFontSize(placeholderFontSize)
        : "13px"};
    color: var(--border-color);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
  resize: vertical;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 6px;
  padding: 4px 11px;
  transition: all 0.3s linear;
  :hover {
    transition: all 0.3s linear;
    border-color: var(--color-primary);
    opacity: 0.6;
  }
  :active {
    opacity: 1;
  }
  :focus {
    box-shadow: ${({ focusShadowColor }) =>
      focusShadowColor
        ? checkFocusShadowColor(focusShadowColor)
        : "0 0 0 2px rgba(5,145,255,.1)"};
  }
  ::placeholder {
    color: var(--border-color);
    font-size: 15px;
  }
`;

const InputTooltip = styled.div`
  font-size: 30px;
  position: relative;
  color: #fff;
  ::before {
    content: "";
    position: absolute;
    top: -0.4em;
    left: 0.5em;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.4em 0.4em 0 0.4em;
    border-color: rgba(0, 0, 0, 0.88) transparent transparent transparent;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  ::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 0;
    top: -41px;
    font-size: 0.5em;
    background: rgba(0, 0, 0, 0.88);
    border-radius: 0.5em;
    padding: 0.25em 0.5em;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    width: 130px;
    height: 30px;
  }
  :hover::before,
  :hover::after {
    opacity: 1;
  }
`;

const CountingInput = styled.input`
  width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
  resize: vertical;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 6px;
  padding: 4px 11px;
  transition: all 0.3s linear;
  :hover {
    transition: all 0.3s linear;
    border-color: var(--color-primary);
    opacity: 0.6;
  }
  :active {
    opacity: 1;
  }
  :focus {
    box-shadow: ${({ focusShadowColor }) =>
      focusShadowColor
        ? checkFocusShadowColor(focusShadowColor)
        : "0 0 0 2px rgba(5,145,255,.1)"};
  }
`;

const CountingTextarea = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
  resize: vertical;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 6px;
  padding: 4px 11px;
  transition: all 0.3s linear;
  :hover {
    transition: all 0.3s linear;
    border-color: var(--color-primary);
    opacity: 0.6;
  }
  :active {
    opacity: 1;
  }
  :focus {
    box-shadow: ${({ focusShadowColor }) =>
      focusShadowColor
        ? checkFocusShadowColor(focusShadowColor)
        : "0 0 0 2px rgba(5,145,255,.1)"};
  }
  ::placeholder {
    color: var(--border-color);
    font-size: 15px;
  }
`;

export {
  InputItem,
  UserFlex,
  UrlFlex,
  SettingFlex,
  InputsFlex,
  MicrophoneFlex,
  Loading,
  Textarea,
  InputTooltip,
  TextareaFlex,
  CountingInput,
  CountingTextarea,
};
