import styled from "styled-components";

const SmallDashboardSidebarWrapper = styled.section`
  .dashboard-close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background-color: transparent;
    border: transparent;
    font-size: 2rem;
    color: red;
    cursor: pointer;
  }

  .small-sidebar {
    display: grid;
    place-items: center;
    padding-top: 5rem;
    transition: var(--transition);
    transform: translateY(-100%);
    width: 100vw;
    height: 75vh;
    background-color: #ccc;
    color: #000;
    position: fixed;
    top: 0;
    left: 0;

    .dashboard-links {
      text-align: left;
      margin-top: 0.85rem;
      display: grid;
      place-items: start;

      h3 {
        font-size: 1.5rem;
      }

      .dashboard-link {
        display: flex;
        margin-bottom: 1rem;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
        .order,
        .cart {
          color: #000;
          display: grid;
          place-items: end;
          padding: 0.1rem 0.5rem;
          text-align: center;
          margin-top: 0.2rem;
        }

        .order {
          background: green;
          margin-left: 4rem;
        }
        .cart {
          background: coral;
          margin-left: 1.5rem;
        }
      }
    }
  }

  .show {
    transform: translateY(0);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default SmallDashboardSidebarWrapper;
