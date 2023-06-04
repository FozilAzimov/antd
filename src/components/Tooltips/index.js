import React, { useState, useRef } from "react";
import Button from './Tooltip';
import Card from "../Card";
import {
  WrapperParent,
  WrapperLeftChild,
  WrapperRightChild,
} from "./style";
import {
  ActionButton,
  ButtonGroup,
  ButtonOption,
  Flex,
  GhostBg,
  GhostButton,
  Loading,
  MultipleFlex,
  PositionButton,
  PreviewFlex,
  PreviewLine,
  SizeFlex,
  TextTooltip,
} from "./Tooltip/style";

function Tooltips () {
  const [size, setSize] = useState("default");
  const [isShown, setIsShown] = useState(false);
  const loadingRef = useRef();
  const loadingRefer = useRef();
  const loadingSvg = useRef();
  const loadingSvgTwo = useRef();
  const loadingReference = useRef();

  function clickBtn () {
    loadingRef.current.style = {
      display: "block",
    };
  }

  function clickButton () {
    loadingSvg.current.style.display = "none";
    loadingRefer.current.style = {
      display: "block",
    };
  }

  function clickButtonThree () {
    loadingSvgTwo.current.style.display = "none";
    loadingReference.current.style = {
      display: "block",
    };
  }

  return (
    <WrapperParent>

      <WrapperLeftChild>
        <Card
          type="Basic"
          desc={
            "There are primary button, default button, dashed button, text button and link button in antd."
          }
        >
          <>
            <TextTooltip
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >Tooltip will show on mouse enter.</TextTooltip>
            {isShown && 'Hey!'}
          </>

        </Card>

        <Card
          type="Icon"
          desc="Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button.If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property."
        >
          <Button bg="primary" borderRadius="50" width="35" height="35">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </Button>
          <Button bg="primary" borderRadius="50" width="35" height="35">
            A
          </Button>
          <Button bg="primary">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
            Search
          </Button>
          <Button bg="default" borderRadius="50" width="35" height="35">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </Button>
          <Button bg="default">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
            Search
          </Button>
          <Button bg="default" borderRadius="50" width="35" height="35">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </Button>
          <Button bg="default">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
            Search
          </Button>
          <Button
            bg="default"
            borderStyle="dashed"
            borderRadius="50"
            width="35"
            height="35"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </Button>
          <Button bg="default" borderStyle="dashed">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
            Search
          </Button>
          <Button bg="default" borderRadius="8" width="35" height="35">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </Button>
        </Card>
        <Card
          type="Size"
          desc="Ant Design supports a default button size as well as a large and small size.If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size."
        >
          <PreviewFlex>
            <ButtonOption>
              <button
                onClick={(e) => setSize(e.target.textContent.toLowerCase())}
              >
                Large
              </button>
              <button
                onClick={(e) => setSize(e.target.textContent.toLowerCase())}
              >
                Default
              </button>
              <button
                onClick={(e) => setSize(e.target.textContent.toLowerCase())}
              >
                Small
              </button>
            </ButtonOption>
            <PreviewLine>
              <legend>Preview</legend>
            </PreviewLine>
            <Flex>
              <Button bg="primary" sizebtn={size}>
                Primary
              </Button>
              <Button bg="default" sizebtn={size}>
                Default
              </Button>
              <Button bg="default" borderStyle="dashed" sizebtn={size}>
                Dashed
              </Button>
              <Button bg="link" borderColor="link" sizebtn={size}>
                Link
              </Button>
            </Flex>
            <Flex>
              <Button bg="primary" borderRadius="8" width="35" height="35">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="download"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </Button>
              <Button bg="primary" borderRadius="50" width="35" height="35">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="download"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </Button>
              <Button bg="primary" borderRadius="25" width="35" height="35">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="download"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </Button>
              <Button bg="primary" borderRadius="25">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="download"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                </svg>
                Download
              </Button>
              <Button bg="primary" borderRadius="10">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="download"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                </svg>
                Download
              </Button>
            </Flex>
          </PreviewFlex>
        </Card>
        <Card
          type="Disabled"
          desc="To mark a button as disabled, add the disabled property to the Button."
        >
          <Flex>
            <div>
              <Button bg="primary">Primary</Button>
              <Button bg="default">Default</Button>
              <Button bg="default" borderStyle="dashed">
                Dashed
              </Button>
              <Button bg="text" borderColor="text">
                Text
              </Button>
              <Button bg="link" borderColor="link">
                Link
              </Button>
              <Button bg="primary">Href Primary</Button>
              <Button bg="dangerDefault" borderColor="danger">
                Danger Default
              </Button>
              <Button bg="dangerText" borderColor="dangerText">
                Danger Text
              </Button>
              <Button bg="dangerLink" borderColor="dangerLink">
                Danger Link
              </Button>
            </div>
            <div>
              <Button
                bg="disabled"
                color="disabled"
                disabled="disabled"
                width="150"
              >
                Primary(disabled)
              </Button>
              <Button
                bg="disabled"
                color="disabled"
                disabled="disabled"
                width="150"
              >
                Default(disabled)
              </Button>
              <Button
                bg="disabled"
                color="disabled"
                disabled="disabled"
                width="150"
                borderStyle="dashed"
              >
                Dashed(disabled)
              </Button>
              <Button
                bg="bgDisabled"
                color="disabled"
                width="150"
                borderColor="bgDisabled"
              >
                Text(disabled)
              </Button>
              <Button
                bg="bgDisabled"
                color="disabled"
                width="150"
                borderColor="bgDisabled"
              >
                Link(disabled)
              </Button>
              <Button
                bg="disabled"
                color="disabled"
                disabled="disabled"
                width="170"
              >
                Href Primary(disabled)
              </Button>
              <Button
                bg="disabled"
                color="disabled"
                disabled="disabled"
                width="170"
              >
                Danger Default(disabled)
              </Button>
              <Button
                bg="bgDisabled"
                color="disabled"
                width="150"
                borderColor="bgDisabled"
              >
                Danger Text(disabled)
              </Button>
              <Button
                bg="bgDisabled"
                color="disabled"
                width="150"
                borderColor="bgDisabled"
              >
                Danger Link(disabled)
              </Button>
            </div>
            <GhostBg>
              <Button bg="ghost" borderColor="ghost">
                Ghost
              </Button>
              <Button bg="disabled" color="disabled" disabled="disabled">
                Ghost(disabled)
              </Button>
            </GhostBg>
          </Flex>
        </Card>
      </WrapperLeftChild>

      <WrapperRightChild>
        <Card
          type="Loading"
          desc="Loading
A loading indicator can be added to a button by setting the loading property on the Button."
        >
          <MultipleFlex>
            <Button bg="primary" style={{ cursor: "default", opacity: "0.65" }}>
              <Loading></Loading> Loading
            </Button>
            <Button
              bg="primary"
              style={{
                cursor: "default",
                opacity: "0.65",
                marginLeft: "10px",
                marginRight: "10px",
              }}
              height="24"
            >
              <Loading></Loading> Loading
            </Button>
            <Button
              bg="primary"
              width="32"
              style={{
                cursor: "default",
                opacity: "0.65",
              }}
            >
              <Loading
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></Loading>
            </Button>
            <Button
              bg="primary"
              style={{ marginLeft: "10px" }}
              onClick={clickBtn}
            >
              <Loading style={{ display: "none" }} ref={loadingRef}></Loading>
              Click Me!
            </Button>
            <Button bg="primary" onClick={clickButton}>
              <svg
                ref={loadingSvg}
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="poweroff"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M705.6 124.9a8 8 0 00-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0162.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0127.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.92 355.92 0 01-76.3 113.3 353.06 353.06 0 01-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.06 353.06 0 01-113.2-76.4A355.92 355.92 0 01184 650.4a355 355 0 01-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7zM480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z"></path>
              </svg>
              <Loading style={{ display: "none" }} ref={loadingRefer}></Loading>
              Click Me!
            </Button>
            <Button
              style={{ width: "32px", marginLeft: "10px" }}
              bg="primary"
              onClick={clickButtonThree}
            >
              <svg
                ref={loadingSvgTwo}
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="poweroff"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M705.6 124.9a8 8 0 00-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0162.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0127.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.92 355.92 0 01-76.3 113.3 353.06 353.06 0 01-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.06 353.06 0 01-113.2-76.4A355.92 355.92 0 01184 650.4a355 355 0 01-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7zM480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z"></path>
              </svg>
              <Loading
                style={{ display: "none", marginRight: "0" }}
                ref={loadingReference}
              ></Loading>
            </Button>
          </MultipleFlex>
        </Card>
        <Card
          type="Multiple Buttons"
          desc="If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into Dropdown.Button.
        "
        >
          <Button bg="primary">primary</Button>
          <Button bg="default">secondary</Button>
          <MultipleFlex>
            <Button
              bg="default"
              width="80"
              style={{ borderTopRightRadius: "0", borderBottomRightRadius: "0" }}
            >
              Actions
            </Button>
            <PositionButton>
              <ActionButton>
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="ellipsis"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path>
                </svg>
              </ActionButton>
              <ButtonGroup id="menu">
                <span>1st item</span>
                <span>2nd item</span>
                <span>3rd item</span>
              </ButtonGroup>
            </PositionButton>
          </MultipleFlex>
        </Card>
        <Card
          type="Ghost Button"
          desc="ghost property will make button's background transparent, it is commonly used in colored background."
        >
          <GhostButton>
            <Button bg="primary">Primary</Button>
            <Button bg="ghost" borderColor="ghost">
              Default
            </Button>
            <Button bg="ghost" borderColor="ghost" borderStyle="dashed">
              Dashed
            </Button>
            <Button bg="dangerDefault" borderColor="danger">
              Danger
            </Button>
          </GhostButton>
        </Card>
        <Card
          type="Danger Buttons"
          desc="danger is a property of button after antd 4.0."
        >
          <Button bg="danger">Primary</Button>
          <Button bg="dangerDefault" borderColor="danger">
            Default
          </Button>
          <Button bg="dangerDefault" borderColor="danger" borderStyle="dashed">
            Dashed
          </Button>
          <Button bg="dangerText" borderColor="text">
            Text
          </Button>
          <Button bg="dangerLink" borderColor="link">
            Link
          </Button>
        </Card>
        <Card
          type="Block Button"
          desc="block property will make the button fit to its parent width."
        >
          <SizeFlex>
            <Button bg="primary" width="400">
              Primary
            </Button>
            <Button bg="default" width="400">
              Default
            </Button>
            <Button bg="default" borderStyle="dashed" width="400">
              Dashed
            </Button>
            <Button
              bg="disabled"
              color="disabled"
              disabled="disabled"
              width="400"
            >
              disabled
            </Button>
            <Button bg="text" borderColor="text" width="400">
              text
            </Button>
            <Button bg="link" borderColor="link" width="400">
              Link
            </Button>
          </SizeFlex>
        </Card>
      </WrapperRightChild>

    </WrapperParent>
  );
}

export default Tooltips;
