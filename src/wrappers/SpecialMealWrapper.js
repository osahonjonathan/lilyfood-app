import styled from "styled-components";

const SpecialMealWrapper = styled.section`
  margin-top: 4rem;
  .meal-head {
    display: grid;
    place-items: center;
    color: var(--color-white);
    h3 {
      font-size: 1.7rem;
      font-weight: bold;
      text-align: center;
      display: flex;
      justify-content: center;
    }
    p {
      font-size: 0.75rem;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (min-width: 992px) {
    margin-top: 9rem;
    .meal-head {
      h3 {
        font-size: 36px;
        letter-spacing: 2px;
        margin-bottom: 1.5rem;
      }
      p {
        width: 50vw;
        margin: 0 auto;
        font-size: 18px;
      }
    }
  }
`;

export default SpecialMealWrapper;
