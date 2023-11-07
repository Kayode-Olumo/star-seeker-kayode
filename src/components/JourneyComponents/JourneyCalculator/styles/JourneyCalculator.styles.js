import styled from "styled-components";

export const JourneyCalculator = styled.div`
  position: absolute;
  bottom: -4rem;
  right: 5rem;
  background-color: #fff;
  padding: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
  border-radius: 12px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`;

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
`;
