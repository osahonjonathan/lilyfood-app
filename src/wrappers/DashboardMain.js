import styled from "styled-components";

const DashboardMainWrapper = styled.section`
  .dashboard-title {
    display: grid;
    place-items: center;
    margin-top: 4rem;

    h3 {
      color: var(--primary-background);
      font-size: 2rem;
      letter-spacing: 2px;
      font-weight: var(--fw-700);
    }

    p {
      margin-top: 0.5rem;
      font-size: 1rem;
      letter-spacing: 2px;
      text-align: center;
      font-weight: var(--fw-400);
      color: rgba(0, 0, 0, 0.69);
    }
  }

  .menu-section {
    margin-top: 3rem;

    .menu {
      display: grid;
      gap: 2rem;

      .menu-info {
        display: grid;
        place-items: center;
        border: 0.3px solid rgba(0, 48, 46, 0.14);
        background-color: rgba(255, 255, 255, 0.83);
        border-radius: 5px;
        padding: 0.5rem;
        .meal-container {
          .meal-image {
            object-fit: cover;
            height: 4rem;
            width: 4rem;
          }
        }
        .title {
          color: var(--primary-background);
          text-transform: capitalize;
          font-size: 1rem;
          text-align: center;
          margin-top: 0.85rem;
        }

        .info {
          font-size: 0.85rem;
          text-align: center;
          color: rgba(0, 0, 0, 0.69);
        }

        .price-info {
          display: flex;
          justify-content: space-around;
          align-items: center;

          .price {
            align-self: flex-start;
            color: var(--primary-background);
            font-weight: bold;
            letter-spacing: 1px;
            font-size: 0.9rem;
          }

          .cart-btn {
            margin-left: 5rem;
            margin-top: -1.1rem;
            background: transparent;
            border: transparent;
            cursor: pointer;
            color: #06e775;
            font-size: 0.9rem;
            font-weight: var(--fw-700);
            letter-spacing: 1px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .dashboard-title {
      place-items: start;
      margin-top: 2.7rem;

      h3 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.1rem;
      }
    }
    /* start */
    .menu-section {
      margin-top: 3.5rem;

      .menu {
        grid-template-columns: repeat(2, 1fr);
        gap: 3.5rem;

        .menu-info {
          .title {
            text-transform: capitalize;
            font-size: 1rem;
          }

          .info {
            font-size: 0.85rem;
            text-align: center;
          }

          .price-info {
            .cart-btn {
              margin-left: 1.8rem;
            }
          }
        }
      }
    }
    /* end */
  }

  @media screen and (min-width: 992px) {
    .dashboard-title {
      place-items: start;
      margin-top: 1.5rem;

      h3 {
        font-size: 23px;
      }

      p {
        font-size: 14px;
        font-weight: var(--fw-500);
      }
    }
    .menu-section {
      margin-top: 2rem;

      .menu {
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;

        .menu-info {
          .title {
            text-transform: capitalize;
            font-size: 1rem;
          }

          .info {
            font-size: 0.95rem;
            text-align: center;
          }

          .price-info {
            .cart-btn {
              margin-left: 4.5rem;
            }
          }
        }
      }
    }
  }
`;
export default DashboardMainWrapper;
