import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    padding: 1rem 0.5rem;
    z-index: 10;
  }

  .nav-brand {
    svg,
    p {
      cursor: pointer;
    }

    .nav-toggle {
      display: none;
    }

    .nav-icon {
      font-size: 25px;
      color: var(--primary-color);
      margin-right: 5px;
    }

    display: flex;
    align-items: center;
    font-size: 17px;
    width: auto;
  }

  ul {
    display: flex;
    font-weight: 300;
    gap: 3rem;
    list-style-type: none;

    li {
      color: #000;
      cursor: pointer;
      transition: var(--default-transition);
      &:hover {
        color: var(--primary-color);
      }
    }
  }
`;

export const NavLogo = styled.p`
  @font-face {
    font-family: "Azonix";
    src: url(/src/fonts/azonix/Azonix.otf);
  }

  font-family: "Azonix", san serif;
`;

export const NavLogin = styled.div`
  display: flex;
  gap: 2rem;

  .nav-account {
    gap: 0.5rem;
    cursor: pointer;
  }
`;
