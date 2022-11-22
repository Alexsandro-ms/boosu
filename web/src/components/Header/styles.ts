import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 65px;
  background-color: var(--Red-500);
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 64px;
  > button {
    margin-right: 1rem;
    line-height: 0;
    background: transparent;
    border: none;
    color: #fff;
  }
  > h1 {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const Menu = styled.div`
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--Red-500);
  animation: forwards openMenu 0.5s;

  > button {
    line-height: 0;
    width: 32px;
    height: 32px;
    position: absolute;
    right: 0;
    margin: 1rem;
    background-color: transparent;
    border: none;
    color: white;
  }

  .user-container {
    width: 100%;
    margin-top: 5rem;
    text-align: center;
    > strong {
      font-size: 1rem;
      letter-spacing: 0.1em;
      margin-top: 1rem;
    }
  }

  .user {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 25px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--Red-500);
  }

  .list-category {
    width: 100%;
    height: 100%;
    margin-top: 2rem;
    ul {
      width: 100%;
      height: 100%;
      li:not(:first-child) {
        margin-top: 0.5rem;
      }
      li {
        padding: 15px 58px;
        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--White-500);
          span {
            margin-left: 1rem;
          }
        }
      }
    }
  }

  /* Animations */

  @keyframes openMenu {
    0% {
      left: -100%;
    }
    70% {
      left: 50px;
    }
    100% {
      left: 0;
    }
  }
`;
