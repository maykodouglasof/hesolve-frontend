import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #0c0b38;

  @media (max-width: 992px) {
    min-height: 64px;
  }
`;

export const Image = styled.img`
  width: 14%;
`;

export const Content = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    padding: 0 16px 0 10px;

    flex-direction: row-reverse;
  }
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;

  .about-button {
    background: ${props => (props.showAbout ? '#19191a' : 'transparent')};
    border: 0;
    padding: 10px;
    border-radius: 20px;
    color: ${props => (props.showAbout ? '#33ff7a' : '#fff')};
    font-weight: bold;
    transition: background 0.2s;

    display: flex;
    align-items: center;

    img {
      height: 26px;
    }
  }

  .mobile-menu-button {
    border: 0;
    background: transparent;

    display: none;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 992px) {
    .about-button {
      margin-right: 16px;
    }

    .mobile-menu-button {
      position: relative;
      z-index: 103;

      display: flex;
    }
  }
`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    > a {
      margin-left: 32px;
      color: #fff;
      font-weight: bold;
      position: relative;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .selected::after {
    content: '';
    width: 100%;
    height: 2px;
    background: #fff;
    position: absolute;
    bottom: -10px;
    left: 0;
  }

  @media (max-width: 992px) {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 102;
    background: rgba(0, 0, 0, 0.9);

    visibility: ${props => (props.showMenu ? 'visible' : 'hidden')};
    opacity: ${props => (props.showMenu ? 1 : 0)};
    transition: opacity 0.2s;

    display: flex;
    justify-content: center;
    flex-direction: column;

    div {
      flex-direction: column;
      justify-content: center;

      > a {
        font-size: 18px;
        margin-left: 0px;

        & + a {
          margin-top: 40px;
        }
      }
    }

    .selected::after {
      bottom: -10px;
    }
  }
`;

export const ProfileData = styled.aside`
  position: relative;

  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    > a {
      margin-left: 32px;
      color: #fff;
      font-weight: bold;
      position: relative;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .selected::after {
    content: '';
    width: 100%;
    height: 2px;
    background: #fff;
    position: absolute;
    bottom: -10px;
    left: 0;
  }

  @media (max-width: 992px) {
    flex-direction: row-reverse;

    span {
      display: none;
    }

    > button {
      margin-right: 8px;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 32px;
      height: 32px;
      border-radius: 16px;
    }
  }
`;
