import styled from "styled-components";

const WrapperParent = styled.div`
  display: flex;
  justify-content: end;
  width: 76%;
  gap: 15px;
`;

const WrapperLeftChild = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const WrapperRightChild = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export {
  WrapperParent,
  WrapperLeftChild,
  WrapperRightChild,
};
