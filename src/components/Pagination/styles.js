import styled, { css } from "styled-components";
import { ArrowBack, ArrowForward } from "@styled-icons/material";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;
  color: #073b4c;
  box-shadow: 2px 2px 4px 0.25px rgba(0, 0, 0, 0.3);
  padding: 10px;
`;

export const Back = styled(ArrowBack)`
  width: 20px;

  ${({ disabled }) =>
    disabled &&
    css`
      color: red;
    `}
`;

export const Next = styled(ArrowForward)`
  width: 20px;

  ${({ disabled }) =>
    disabled &&
    css`
      color: red;
    `}
`;
