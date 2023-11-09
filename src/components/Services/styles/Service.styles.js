import styled from "styled-components";

export const ServicesWrapper = styled.section`
  margin: 8rem 4rem;

  .services {
    margin-top: 10rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    .service {
      padding: 1.5rem 2rem;
      text-align: center;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0.5rem;
      gap: 1rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
      border-radius: 10px;

      h3 {
        color: var(--primary-text);
      }

      p {
        color: var(--secondary-text);
      }

      img {
        height: 128px;
        width: 128px;
      }
      transition: var(--default-transition);
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 3rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
