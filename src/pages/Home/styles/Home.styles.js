import styled from "styled-components";

export const HomeWrapper = styled.section`
    margin-top: 2rem;
    position: relative;

  }
`;

export const HomeBanner = styled.section`
  img {
    height: 60vh;
    width: 100%;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    img {
      height: 40vh;
    }
  }
`;

export const HomeContent = styled.div`
    .home-info {
        position: absolute;
        top: 17rem;
        margin-left: 8rem;

        h1{
            @font-face {
                font-family: "Azonix";
                src: url(/src/fonts/azonix/Azonix.otf);
              }
            
              font-family: "Azonix", san serif;
              color: #fff;
              font-size: 2rem;
              margin-bottom: 2rem;
        }
    }
    
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home-info {
      margin-left: 2rem !important;
      top: 9rem !important;

      h1 {
        font-size: 2rem !important;
        margin-bottom: 1rem;
      }
    }
  }
`;

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

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    margin: 2rem;

    form {
      flex-direction: column;
      align-items: flex-start;
    }
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

export const JourneyResult = styled.div`
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
