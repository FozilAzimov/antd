import React, { useRef, useState } from "react";
import Card from "../Card";
import InputItem from "./Input";
import {
  WrapperParent,
  WrapperLeftChild,
  WrapperRightChild,
} from "./style";
import {
  CountingInput,
  CountingTextarea,
  InputTooltip,
  InputsFlex,
  Loading,
  MicrophoneFlex,
  SettingFlex,
  Textarea,
  TextareaFlex,
  UrlFlex,
  UserFlex,
} from "./Input/style";

const Inputs = () => {
  const [enterNumber, setEnterNumber] = useState("Input a number");
  const enterNumberFunc = ({ target: { value } }) => {
    setEnterNumber(value);
  };

  const inputElement = useRef();
  const textareaElement = useRef();

  const closeCircleClear = () => (inputElement.current.value = "");
  const closeCircleClearTextarea = () => (textareaElement.current.value = "");
  const [countInput, setCountInput] = useState(0);
  const [countTextarea, setCountTextarea] = React.useState(0);

  return (
    <WrapperParent>

      <WrapperLeftChild>
        <Card type="Basic usage" desc="Basic usage example.">
          <InputItem
            placeholder="Basic usage"
            size="default"
            borderColor="default"
            hoverBorderColor="primary"
            checkFocusShadowColor="primary"
            placeholderFontSize="default"
          />
        </Card>

        <Card type="Pre / Post tab" desc="Using pre & post tabs example.">
          <UrlFlex>
            <span>http://</span>
            <InputItem
              defaultValue="mysite"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
            />
            <span>.com</span>
          </UrlFlex>
          <UrlFlex>
            <select name="protocol">
              <option value="http://">http://</option>
              <option value="https://">https://</option>
            </select>
            <InputItem
              defaultValue="mysite"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
            />
            <select name="url">
              <option value=".com">.com</option>
              <option value=".jp">.jp</option>
              <option value=".cn">.cn</option>
              <option value=".org">.org</option>
            </select>
          </UrlFlex>
          <SettingFlex>
            <InputItem
              defaultValue="mysite"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
            />
            <span>
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="setting"
                width="14px"
                height="14px"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"></path>
              </svg>
            </span>
          </SettingFlex>
          <UrlFlex>
            <span>http://</span>
            <InputItem
              defaultValue="mysite"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              style={{ borderRight: "0" }}
            />
            <span
              style={{
                backgroundColor: "transparent",
                borderLeft: "0",
              }}
            >
              .com
            </span>
          </UrlFlex>
          <UrlFlex>
            <select name="protocol">
              <option value="http://">http://</option>
              <option value="https://">https://</option>
            </select>
            <InputItem
              defaultValue="mysite"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              style={{
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
              }}
            />
          </UrlFlex>
        </Card>

        <Card
          type="Search box"
          desc="Example of creating a search box by grouping a standard input with a search button."
        >
          <InputsFlex>
            <InputItem
              placeholder="input search text"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              placeholderFontSize="default"
            />
            <button type="submit">
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
            </button>
          </InputsFlex>
          <InputsFlex>
            <InputItem
              placeholder="input search text"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              placeholderFontSize="default"
            />
            <button type="submit">
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
            </button>
          </InputsFlex>
          <InputsFlex>
            <span>https://</span>
            <InputItem
              placeholder="input search text"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              style={{ borderRadius: "0" }}
              placeholderFontSize="default"
            />
            <button type="submit">
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
            </button>
          </InputsFlex>
          <InputsFlex>
            <InputItem
              placeholder="input search text"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              placeholderFontSize="default"
            />
            <button
              id="currentHover"
              type="submit"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="search"
                width="1em"
                height="1em"
                fill="white"
                aria-hidden="true"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
              </svg>
            </button>
          </InputsFlex>
          <InputsFlex>
            <InputItem
              placeholder="input search text"
              size="large"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              placeholderFontSize="large"
            />
            <button
              type="submit"
              style={{
                color: "#fff",
                backgroundColor: "#1677ff",
                boxShadow: "0 2px 0 rgba(5,145,255,.1)",
                padding: "4px 15px",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
                height: "100%",
                fontSize: "16px",
              }}
            >
              Search
            </button>
          </InputsFlex>
          <MicrophoneFlex>
            <InputItem
              placeholder="input search text"
              size="large"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              placeholderFontSize="large"
            />
            <span>
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="audio"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"></path>
              </svg>
            </span>
            <button
              type="submit"
              style={{
                color: "#fff",
                backgroundColor: "#1677ff",
                boxShadow: "0 2px 0 rgba(5,145,255,.1)",
                padding: "4px 15px",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
                height: "100%",
                fontSize: "16px",
              }}
            >
              Search
            </button>
          </MicrophoneFlex>
        </Card>

        <Card type="TextArea" desc="For multi-line input.">
          <Textarea rows="4"></Textarea>
          <Textarea rows="4" placeholder="maxLength is 6"></Textarea>
        </Card>

        <Card
          type="Format Tooltip Input"
          desc="You can use the Input in conjunction with Tooltip component to create a Numeric Input, which can provide a good experience for extra-long content display."
        >
          <InputTooltip data-tooltip={enterNumber}>
            <InputItem
              onChange={enterNumberFunc}
              placeholder="Input a number"
              type="number"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              placeholderFontSize="default"
            />
          </InputTooltip>
        </Card>


        <Card
          type="With character counting
        "
          desc="Show character counting."
        >
          <TextareaFlex>
            <CountingInput
              type="text"
              onChange={(e) => setCountInput(e.target.value.length)}
              maxLength={20}
            />
            <span className="countInput">{countInput} / 20</span>
          </TextareaFlex>
          <TextareaFlex>
            <CountingTextarea
              maxLength={100}
              onChange={(e) => setCountTextarea(e.target.value.length)}
            ></CountingTextarea>
            <span className="countingTextarea">{countTextarea} / 100</span>
          </TextareaFlex>
        </Card>
        <Card
          type="Status"
          desc="Add status to Input with status, which could be error or warning."
        ></Card>
      </WrapperLeftChild>

      <WrapperRightChild>
        <Card
          type="Three sizes of Input"
          desc="There are three sizes of an Input box: large (40px), default (32px) and small (24px)."
        >
          <UserFlex>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="user"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
            </svg>
            <InputItem
              placeholder="large size"
              size="large"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              placeholderFontSize="large"
            />
          </UserFlex>
          <UserFlex>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="user"
              width="14px"
              height="14px"
              fill="currentColor"
              aria-hidden="true"
              style={{ top: "13px" }}
            >
              <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
            </svg>
            <InputItem
              placeholder="default size"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              placeholderFontSize="default"
            />
          </UserFlex>
          <UserFlex>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="user"
              width="14px"
              height="14px"
              fill="currentColor"
              aria-hidden="true"
              style={{ top: "11px" }}
            >
              <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
            </svg>
            <InputItem
              placeholder="small size"
              size="small"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              placeholderFontSize="small"
            />
          </UserFlex>
        </Card>

        <Card
          type="Compact Style"
          desc="Use Space.Compact create compact style, See the Space.Compact documentation for more."
        >
          <InputItem
            defaultValue="26888888"
            size="default"
            borderColor="default"
            hoverBorderColor="primary"
            checkFocusShadowColor="primary"
          />
          <InputsFlex>
            <InputItem
              defaultValue="512"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              style={{ width: "25%" }}
            />
            <InputItem
              defaultValue="26888888"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
            />
          </InputsFlex>
          <InputsFlex>
            <span>https://</span>
            <InputItem
              placeholder="input search text"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              style={{ borderRadius: "0" }}
              placeholderFontSize="default"
            />
            <button type="submit">
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
            </button>
          </InputsFlex>
          <InputsFlex>
            <InputItem
              defaultValue="Combine input and button"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
            />
            <button
              type="submit"
              style={{
                color: "#fff",
                backgroundColor: "#1677ff",
                boxShadow: "0 2px 0 rgba(5,145,255,.1)",
                fontSize: "14px",
                height: "32px",
                padding: "4px 15px",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
              }}
            >
              Submit
            </button>
          </InputsFlex>
          <UrlFlex>
            <select name="company">
              <option value="zhejiang">Zhejiang</option>
              <option value="jiangsu">Jiangsu</option>
            </select>
            <InputItem
              defaultValue="Xihu District, Hangzhou"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              style={{
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
              }}
            />
          </UrlFlex>
        </Card>

        <Card type="Search box with loading" desc="Search loading when onSearch.">
          <InputsFlex>
            <InputItem
              placeholder="input search loading default"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              placeholderFontSize="default"
            />
            <button type="submit" id="firstSpinHover">
              <Loading
                id="firstLoadingHover"
                style={{ borderTopColor: "rgba(0, 0, 0, 0.45)" }}
              ></Loading>
            </button>
          </InputsFlex>
          <InputsFlex>
            <InputItem
              placeholder="input search loading with enterButton"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              placeholderFontSize="default"
            />
            <button type="submit" id="secondSpinHover">
              <Loading
                id="secondLoadingHover"
                style={{ borderTopColor: "rgba(0, 0, 0, 0.45)" }}
              ></Loading>
            </button>
          </InputsFlex>
          <InputsFlex>
            <InputItem
              placeholder="input search loading with enterButton"
              size="large"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              placeholderFontSize="large"
            />
            <button type="submit" id="thirdSpinHover">
              <Loading
                id="thirdLoadingHover"
                style={{ borderTopColor: "rgba(0, 0, 0, 0.45)" }}
              ></Loading>
              <span>Search</span>
            </button>
          </InputsFlex>
        </Card>

        <Card
          type="Autosizing the height to fit the content"
          desc="autoSize prop for a textarea type of Input makes the height to automatically adjust based on the content. An option object can be provided to autoSize to specify the minimum and maximum number of lines the textarea will automatically adjust."
        >
          <Textarea
            placeholder="Autosize height based on content lines"
            style={{ resize: "none", height: "35px" }}
          ></Textarea>
          <Textarea
            placeholder="Autosize height with minimum and maximum number of lines"
            style={{ resize: "none", height: "60px" }}
          ></Textarea>
          <Textarea
            placeholder="Controlled autosize"
            style={{ resize: "none", height: "80px" }}
          ></Textarea>
        </Card>

        <Card
          type="prefix and suffix"
          desc="Add a prefix or suffix icons inside input."
        >
          <UserFlex>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="user"
              width="14px"
              height="14px"
              fill="currentColor"
              aria-hidden="true"
              style={{ top: "13px" }}
            >
              <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
            </svg>
            <InputItem
              placeholder="Enter your username"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
              placeholderFontSize="default"
            />
            <svg
              id="warning-icon"
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="info-circle"
              width="1em"
              height="1em"
              fill="gray"
              aria-hidden="true"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
              <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
            </svg>
          </UserFlex>
          <UrlFlex>
            <span id="rmb">￥</span>
            <InputItem
              id="rmbBtn"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
            />
            <span id="rmb2">RMB</span>
          </UrlFlex>
          <UrlFlex>
            <span
              id="rmb"
              style={{
                backgroundColor: "#d9d9d9",
                cursor: "not-allowed",
                opacity: "0.6",
              }}
            >
              ￥
            </span>
            <InputItem
              style={{
                backgroundColor: "#d9d9d9",
                cursor: "not-allowed",
                opacity: "0.6",
              }}
              id="rmbBtn"
              size="default"
              borderColor="default"
              hoverBorderColor="primary"
              checkFocusShadowColor="primary"
            />
            <span
              id="rmb2"
              style={{
                backgroundColor: "#d9d9d9",
                cursor: "not-allowed",
                opacity: "0.6",
              }}
            >
              RMB
            </span>
          </UrlFlex>
        </Card>
        <Card type="Password box" desc="Input type of password"></Card>

        <Card
          type="With clear icon"
          desc="Input box with the remove icon, click the icon to delete everything."
        >
          <TextareaFlex>
            <Textarea
              placeholder="Input with clear icon"
              style={{ resize: "none", height: "35px" }}
              ref={inputElement}
              name="inputIcon"
            ></Textarea>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="close-circle"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              onClick={closeCircleClear}
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
            </svg>
          </TextareaFlex>
          <TextareaFlex>
            <Textarea
              placeholder="Textarea width clear icon"
              style={{ height: "60px" }}
              ref={textareaElement}
            ></Textarea>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="close-circle"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              onClick={closeCircleClearTextarea}
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
            </svg>
          </TextareaFlex>
        </Card>
      </WrapperRightChild>

    </WrapperParent>
  );
};

export default Inputs;
