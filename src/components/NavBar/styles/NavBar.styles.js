import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: start;
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

  .nav-toggle {
    display: nones;
    position: absolute;
    top: 0.75rem;
    right: 1.5rem;
    flex-direction: column;
    justify-content: space-between;
    width: 2.25rem;
    height: 2rem;
  }

  @media (max-width: 1000px) {
    .nav-toggle {
      display: flex;
    }

    .nav-toggle span {
      height: 0.2rem;
      width: 100%;
      background-color: #000;
      border-radius: 0.2rem;
    }

    .nav-links {
      width: 100%;
    }

    ul.open {
      display: flex;
    }

    ul {
      display: none;
      flex-direction: column;
      width: 100%;
      margin-bottom: 0.25rem;

      li {
        width: 100%;
        text-align: center;
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
