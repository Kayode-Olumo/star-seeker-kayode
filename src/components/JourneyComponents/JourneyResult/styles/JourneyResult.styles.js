import styled from "@emotion/styled";

export const JourneyResultWrapper = styled.div`
  margin: 120px auto 0 auto;
  width: 60%;
  height: 19rem;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
  border-radius: 12px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    margin: auto;

    .ticket-logo {
      width: 40px !important;
    }

    .total-journey-cost {
      font-size: 1.2rem;
    }

    .journey-ticket-text {
      font-size: 0.8rem !important;
    }

    .total-parking {
      font-size: 1.1rem !important;
    }

    img {
      width: 100% !important;
    }

    p {
      font-size: 1.3rem;
    }
  }
`;

export const JourneyResultContainer = styled.div`
  height: 100%;
  width: 100%;

  .top-bar {
    padding: 10px 20px 0 20px;
    background-color: var(--primary-color);
    height: 30%;
    width: 100%;
    border-radius: 15px 15px 0 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
  }

  .total-journey-cost {
    display: grid;
    align-content: center;
    justify-content: center;
    font-size: 1.8rem;
  }
`;

export const JourneyResultImg = styled.div`
  display: flex;
  justify-content: flex-start;

  .ticket-logo {
    width: 40px;
    margin-right: 20px;
    font-size: 1rem;
  }

  p {
    font-size: 2rem;
    display: grid;
    align-content: center;
    justify-content: center;
  }
`;
