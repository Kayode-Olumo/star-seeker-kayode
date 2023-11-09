import styled from "styled-components";

export const CheapTravelWrapper = styled.section`
  margin-top: 2rem;
  position: relative;
`;

export const CheapTravelBanner = styled.section`
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

export const CheapTravelContent = styled.section`
.cheap-info {
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
          font-size: 3rem;
          margin-bottom: 2rem;
    }
}

}

@media screen and (min-width: 280px) and (max-width: 1080px) {
.cheap-info {
  margin-left: 2rem !important;
  top: 9rem !important;

  h1 {
    font-size: 2rem !important;
    margin-bottom: 1rem;
  }
}
}
`;

export const CheapTravelModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;
  width: 50%;
  position: absolute;
  bottom: 15rem;
  right: 27rem;
  background-color: #fff;
  padding: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
  border-radius: 12px;

  .search-input {
    width: 100%;
  }

  .search-icon {
    font-size: 1.8rem;
    display: flex;
    margin: auto;
    cursor: pointer;
  }

  .search-btn {
    padding: 1rem 2rem;
    background-color: var(--primary-color);
    border: none;
    font-size: 1.2rem;
    color: #fff;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0rem 2rem;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    position: absolute;
    bottom: 3rem;
    right: -2rem;
  }
`;
