import React from "react";
import styled from "styled-components";
import Button from "./";

const StyledContainer = styled.div`
  margin: 20px;
`;

export default () => (
  <StyledContainer>
    <Button>Look mum, no hands!</Button>
  </StyledContainer>
);
