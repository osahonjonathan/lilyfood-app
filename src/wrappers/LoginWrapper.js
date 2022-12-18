import styled from "styled-components";

const LoginWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 95vw;

  .login-image {
    display: none;
  }

  .form {
    margin-top: 0;
    h3 {
      margin-top: 1rem;
    }
  }

  .form {
    width: 100vw;
    margin: 0 auto;
    display: grid;
    place-items: center;
    padding: 1rem;
    transition: 0.3s ease-in-out all;

    h3 {
      color: var(--primary-background);
      font-weight: var(--fw-700);
      text-align: center;
      margin: 3rem;
      font-size: 2rem;
    }

    .reg-tit {
      font-size: 1.7rem;
    }

    .form-row {
      margin-bottom: 1rem;
      justify-content: center;
      .form-input,
      .form-textarea,
      .form-select {
        width: 80vw;
        margin: 0.5rem auto;
        padding: 0.375rem 0.75rem;
        outline: 1px solid var(--primary-clr);
        border: transparent;
        border-radius: 5px;
      }

      .form-input,
      .form-select,
      .btn-block {
        height: 55px;
      }
      &::placeholder {
        font-family: inherit;
        color: pink;
        letter-spacing: 5px;
      }

      .icon,
      .reg-icon {
        display: none;
      }
    }

    .btn {
      background: var(--primary-background);
      color: var(--primary-clr);
      width: 88%;
      margin: 1rem 4rem;
      padding: 0.75rem;
      font-size: 1.2rem;
      font-weight: var(--fw-500);
      border: transparent;
      text-transform: uppercase;
      cursor: pointer;
    }
    .btn-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      place-items: center;
      gap: 3.5rem;
      button {
        margin: 0.85rem;
        background: transparent;
        color: var(--primary-background);
        border: transparent;
        font-size: 0.8rem;
      }
    }

    .log {
      text-align: center;
      span {
        font-weight: var(--fw-400);
      }

      .logon {
        padding-left: 0.1rem;
        text-transform: uppercase;
        font-weight: var(--fw-700);
      }
    }
  }

  @media screen and (min-width: 768px) {
    .form {
      margin-top: 0.5rem;

      .btn {
        width: 84%;
      }
      .btn-container {
        gap: 18rem;
        button {
          font-size: 1rem;
        }
      }

      .log {
        .logon {
          padding-left: 0.5rem;
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (min-width: 992px) {
    .login-image-container {
      .login-image {
        display: block;
        width: 50vw;
        height: 100vh;
        object-fit: cover;
        border-radius: 7px;
      }
    }
    .form {
      width: 90vw;
      margin: 0 auto;
      padding: 2rem 2.5rem;
      transition: 0.3s ease-in-out all;

      h3 {
        color: var(--primary-background);
        font-weight: var(--fw-700);
        text-align: center;
        margin: 3rem;
      }
      .reg-tit {
        font-size: 2rem;
      }

      .form-row {
        margin-bottom: 1rem;
        .form-input,
        .form-textarea,
        .form-select {
          width: 35vw;
          margin: 1rem auto;
          padding: 0.375rem 0.75rem;
          outline: 1px solid var(--primary-clr);
          border: transparent;
        }

        .form-input,
        .form-select,
        .btn-block {
          height: 55px;
        }
        &::placeholder {
          font-family: inherit;
          color: pink;
          letter-spacing: 5px;
        }
        .icon {
          display: block;
          position: absolute;
          width: 37px;
          height: 33px;
          right: 151px;
          top: 54%;
          cursor: pointer;
          font-size: 1rem;
        }
        .reg-icon {
          display: block;
          position: absolute;
          width: 37px;
          height: 33px;
          right: 150px;
          top: 63.5%;
          cursor: pointer;
          font-size: 1rem;
        }
      }
      .btn {
        background: var(--primary-background);
        color: var(--primary-clr);
        width: 90%;
        margin: 1rem 4rem;
        padding: 0.75rem;
        font-size: 1.2rem;
        font-weight: var(--fw-500);
        border: transparent;
        text-transform: uppercase;
        cursor: pointer;
      }
      .btn-container {
        gap: 9rem;
        button {
          font-size: 1.05rem;
          font-weight: var(--fw-400);
        }
      }

      .log {
        span {
          font-size: 1.05rem;
          font-weight: var(--fw-400);
        }
        margin: 0.5rem;
        font-weight: var(--fw-700);
      }
    }
  }
`;
export default LoginWrapper;
