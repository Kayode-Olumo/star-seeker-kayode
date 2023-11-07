import styled from "styled-components";

export const JourneyCalculatorRow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

  .journey-label {
    font-size: 0.7rem;
    color: var(--secondary-text);
  }

  .journey-input {
    box-shadow: none;
    outline-width: 0;
    color: var(--primary-color);
    margin-top: 0.5rem;
    background-color: #fff;
    font-size: 1.1rem;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 100%;
  }
`;
