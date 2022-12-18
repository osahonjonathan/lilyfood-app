import styled from "styled-components";

const SidebarWrapper = styled.section`
  .sidebar {
    color: var(--primary-background);
    background-color: var(--primary-clr);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60vh;
    transform: translateY(-100%);
    transition: var(--transition);
  }

  .show-sidebar {
    transform: translateY(0);
  }

  .sidebar-head {
    width: var(--width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
  }

  .nav-close-btn {
    background-color: transparent;
    border: transparent;
    font-size: 2rem;
    color: red;
    cursor: pointer;
  }

  .sidebar-links {
    display: grid;
    gap: 2rem;
    font-size: 2rem;
    place-items: center;
    margin-top: 2rem;
  }

  .sidebar-link {
    color: var(--primary-background);
    font-family: var(--fw-500);
  }

  @media screen and (min-width: 765px) {
    .show-sidebar {
      display: none;
    }
  }
`;
export default SidebarWrapper;
