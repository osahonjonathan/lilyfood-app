import styled from "styled-components";

const DashboardNavWrapper = styled.section`
  display: flex;
  justify-content: end;
  align-items: center;
  .icon {
    top: 1rem;
    right: 2rem;
    font-size: 2rem;
    background-color: transparent;
    border: transparent;
    color: #000;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export default DashboardNavWrapper;
