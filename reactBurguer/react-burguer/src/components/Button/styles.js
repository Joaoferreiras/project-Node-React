import styled from "styled-components";

export const Button = styled.button`
  margin-top: 30px;
  width: 342px;
  height: 68px;
  background:${props => props.isBack ? '#FFFFFF24': '#d93856'};
  border: none;
  font-weight: 900;
  color: #ffffff;
  font-size: 17px;
  line-height: 3px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.7;
  }
`;
