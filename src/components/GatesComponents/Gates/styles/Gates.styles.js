import styled from "styled-components";

export const GatesWrapper = styled.section`
    display: flex;
    gap: 5rem;

    @media screen and (min-width: 280px) and (max-width: 1080px) {
        margin: 0rem 2rem;
        flex-direction: column;
        gap: 3rem;
    }


    .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 3rem;

        h2 {
            font-size: 2rem;
            line-height: 3rem;

            span {
                color: var(--primary-color);
            }
        }

        p {
            color: var(--secondary-color);
        }
    }

    .gates {
        flex: 2;
        display: flex;
        gap:2rem;

        .gate-card {
            position: relative;
            img {
                height: 20rem;
                width: 330px;

            }
            .gate-card-content{
                position: absolute;
                bottom: 0rem;
                height: 100%;
                width: 100%;
                background: linear-gradient( to bottom, #ffffff14, #000000ae); 
                display: flex;
                flex-direction: column-reverse;
                h3 {
                margin-left: 1rem;
                font-size: 1.5rem;
                color: white;
                }
            }
        }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .gates {
        flex-direction: column !important;
        .gate-card {
            img {
                width: 100% !important;
            }
        }
    }
  }

  .gate-btn {
    color: var(--primary-color);
    width: auto;
    font-weight: 500;
    height: auto;
    margin: 10px;
    cursor: pointer;
  }

`;
