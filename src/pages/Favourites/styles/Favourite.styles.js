import styled from "@emotion/styled";

export const FavouritesWrapper = styled.section`
  @import "https://unpkg.com/open-props";
  @import "https://unpkg.com/open-props/normalize.min.css";

  margin-top: 2rem;
  position: relative;

  .fav-scroller {
    --_spacer: var(--size-3);
    display: grid;
    gap: var(--_spacer);
    grid-auto-flow: column;
    grid-auto-columns: auto;
    // gap: 1rem;

    padding: 0 var(--_spacer) var(--_spacer);

    overflow-x: auto;
    overscroll-behavior-inline: contain;
  }

  .fav-group {
    display: grid;
    gap: var(--_spacer);
    grid-auto-flow: column;
  }

  .fav-element {
    display: grid;
    grid-template-rows: min-content;
    gap: var(--_spacer);
    padding: var(--_spacer);
    background: var(--surface-2);
    border-radius: var(--radius-2);
    box-shadow: var(--shadow-2);
    margin: 1rem;
  }

  .snaps-inline {
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: var(--_spacer, 1rem);
  }

  .snaps-inline > * {
    scroll-snap-align: start;
  }
`;

export const FavouritesBanner = styled.section`
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

export const FavouriteslContent = styled.section`
.fav-info {
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
