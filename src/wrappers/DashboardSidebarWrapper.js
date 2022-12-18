import styled from "styled-components";

const DashboardSidebarWrapper = styled.section`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 33vw;
    background-color: #fbfbfb;
    color: #707070;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    position: fixed;

    .big-sidebar {
      display: grid;
      place-items: center;
      padding-top: 8rem;

      .dashboard-links {
        text-align: left;
        margin-top: 4rem;
        display: grid;
        place-items: start;
        margin-left: -1rem;

        h3 {
          font-size: 1.3rem;
        }

        .dashboard-link {
          display: flex;
          margin-top: 2rem;
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
            background: #06e775;
            margin-left: 3.7rem;
            border: 1px solid #06e775;
            border-radius: 5px;
          }
          .cart {
            background: #f3c294;
            margin-left: 1.5rem;
            border: 1px solid #f3c294;
            border-radius: 5px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    width: 22vw;
    height: 110%;
    position: relative;
    .big-sidebar {
      padding-top: 5rem;
      height: 65vh;

      .dashboard-links {
        margin-top: 3.9rem;
        h3 {
          font-size: 16px;
          line-height: 24px;
        }
        .dashboard-link {
          margin-top: 1rem;
          .order {
            margin-left: 4rem;
          }
        }
      }
    }
  }
`;
export default DashboardSidebarWrapper;
