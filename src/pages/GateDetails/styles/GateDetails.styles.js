import styled from "styled-components";

export const GatesDetailsWrapper = styled.section`
  margin-top: 2rem;
  position: relative;
`;

export const Banner = styled.section`
  img {
    height: 60vh;
    width: 100%;
  }
`;

export const GatesDetailsContent = styled.div`
  .gate-details-info {
    position: absolute;
    top: 17rem;
    margin-left: 8rem;

    h1 {
      @font-face {
        font-family: "Azonix";
        src: url(/src/fonts/azonix/Azonix.otf);
      }

      font-family: "Azonix", san serif;
      color: #fff;
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }
`;

export const GateDetailsTable = styled.div``;
