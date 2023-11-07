import styled from "styled-components";

export const GateNotification = styled.div`
  border: 1px solid green;
  background-color: green;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 15px;
`;

export const GateText = styled.p`
  padding-left: 10px;
  font-weight: bold;

  span {
    animation: blink 1s steps(5, start) infinite;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
