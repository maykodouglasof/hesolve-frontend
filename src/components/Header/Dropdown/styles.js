import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #FFF;
  padding: 8px 0;
  width: 325px;
  box-shadow: 2px 2px 16px #000;
  z-index: 100;

  position: absolute;
  right: 0px;
  top: 64px;

  visibility: hidden;
  ${props =>
    props.showDropdown &&
    css`
      animation: ${profileOptionsDropdown} 0.75s forwards
        cubic-bezier(0.19, 0.8, 0.28, 1);
    `}

  ul {
    overflow: hidden;

    li {
      height: 60px;
      padding: 0 24px;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;

      ${props =>
        props.showDropdown &&
        css`
          opacity: 0;
          animation: ${incresedFadeUp} 0.8s forwards
            cubic-bezier(0.19, 1, 0.22, 1);
        `}

      &:nth-child(1) {
        animation-delay: 0.2s;
      }

      &:nth-child(2) {
        animation-delay: 0.3s;
      }

      &:nth-child(3) {
        animation-delay: 0.4s;
      }

      &:hover svg {
        color: #19191a;
      }

      button,
      a {
        width: 100%;
        color: #1E0253;
        font-size: 18px;
        font-weight: 500;
        background: transparent;
        border: 0;

        display: flex;
        align-items: center;

        svg {
          width: 22px;
          height: 22px;
          color: #1E0253;
          margin-right: 16px;
          transition: color 0.2s;
        }
      }
    }
  }

  @media (max-width: 992px) {
    left: 0px;
    top: 54px;

    ${props =>
      props.showDropdown &&
      css`
        animation: ${profileOptionsDropdownMobile} 0.75s forwards
          cubic-bezier(0.19, 0.8, 0.28, 1);
      `}
  }

  @media (max-width: 768px) {
    width: 220px;

    ul {
      li {
        height: 54px;
        padding: 0 16px;

        button,
        a {
          font-size: 14px;

          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`;
