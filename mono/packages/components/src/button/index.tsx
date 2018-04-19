import React from "react";
import styled, { StyledComponentClass, injectGlobal } from "styled-components";

injectGlobal`html{ background-color: pink }`;

export default styled.button`
  background-color: blue;
  font-weight: 600;
  font-size: 18px;
  color: goldenrod;

  border: none;
  border-radius: 4px;
  height: 60px;
  cursor: pointer;

  width: 360px;
`;
