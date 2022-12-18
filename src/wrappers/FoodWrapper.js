import styled from "styled-components";

const FoodWrapper = styled.section`
  .single-food {
    transition: var(--transition);
    display: grid;
    place-items: center;
    color: var(--primary-background);
    background-color: #fbfbfb;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    padding: 2rem 1rem;
    height: 100vh;
    transform: translateX(100%);

    .close {
      position: absolute;
      top: 1rem;
      right: 2rem;
      background: transparent;
      border: transparent;
      color: red;
      font-size: 2rem;
      cursor: pointer;
      transition: var(--transition);
    }

    .food-img {
      object-fit: cover;
      height: 16rem;
      width: 16rem;
    }

    .food-title {
      color: var(--primary-background);
      font-size: 1.5rem;
    }

    .food-info {
      font-size: 1.3rem;
      text-align: center;
      color: #000;
    }

    .food-details {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1.3rem;
      color: var(--primary-background);
      font-weight: var(--fw-700);
      font-size: 1rem;
    }

    .cart-count {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 1rem;
      gap: 3rem;
      margin-top: -2rem;

      .btn-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 1rem;

        button {
          padding: 0.5rem 0.75rem;
          background-color: var(--primary-clr);
          color: var(--primary-background);
          border: transparent;
          font-size: 1.3rem;
          cursor: pointer;
        }

        h3 {
          margin-top: 0.6rem;
        }
      }

      .cart-btn {
        color: #fff;
        background: var(--primary-background);
        border: transparent;
        border-radius: 5px;
        font-weight: var(--fw-600);
        cursor: pointer;
      }
    }
  }

  .show {
    transform: translateX(0);
    transition: var(--transition);
  }

  /* tab */
  @media screen and (min-width: 768px) {
    .clr {
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(196, 196, 196, 0.42);
    }
    .single-food {
      transition: var(--transition);
      display: grid;
      place-items: center;
      color: var(--primary-background);
      background-color: #fff;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 0;
      right: 0;
      width: 55vw;
      padding: 0.5rem 1.7rem;
      height: 100%;
      transform: translateX(100%);

      .close {
        position: absolute;
        top: 1rem;
        right: 2rem;
        background: transparent;
        border: transparent;
        color: red;
        font-size: 2rem;
        cursor: pointer;
      }

      .food-img {
        object-fit: cover;
        height: 16rem;
        width: 16rem;
      }

      .food-title {
        color: var(--primary-background);
        font-size: 1.5rem;
        margin-top: -2rem;
      }

      .food-info {
        font-size: 1.3rem;
        margin-top: -2rem;
      }

      .food-details {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1rem;
        color: var(--primary-background);
        font-weight: var(--fw-700);
        font-size: 1rem;
      }

      .cart-count {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 1rem;
        gap: 3rem;
        margin-top: -2rem;

        .btn-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 1rem;

          button {
            padding: 0.5rem 0.75rem;
            background-color: var(--primary-clr);
            color: var(--primary-background);
            border: transparent;
            font-size: 1.3rem;
            cursor: pointer;
          }

          h3 {
            margin-top: 0.6rem;
          }
        }
        .cart-btn {
          font-size: 1rem;
        }
      }
    }

    .show {
      transform: translateX(0);
      transition: var(--transition);
    }
  }
  /* Desktop */
  @media screen and (min-width: 992px) {
    .single-food {
      width: 40vw;
      padding: 0.5rem 3rem;

      .food-title {
        color: var(--primary-background);
        font-size: 2rem;
        margin-top: 0;
        font-size: 1.5rem;
      }

      .food-info {
        margin-top: 0;
        font-size: 1.1rem;
      }

      .food-details {
        column-gap: 2rem;
        font-weight: bold;
        font-size: 1.2rem;
        font-size: 17px;
      }

      .cart-count {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 1rem;
        gap: 5rem;
        margin-top: 0;

        .btn-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 1rem;

          button {
            padding: 0.5rem 0.75rem;
            background-color: var(--primary-clr);
            color: var(--primary-background);
            border: transparent;
            font-size: 31px;
            cursor: pointer;
          }

          h3 {
            margin-top: 0.5rem;
            font-size: 27px;
          }
        }
      }
    }

    .show {
      transform: translateX(0);
      transition: var(--transition);
    }
  }
`;
export default FoodWrapper;
