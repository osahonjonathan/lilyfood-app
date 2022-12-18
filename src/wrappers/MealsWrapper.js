import styled from "styled-components";

const MealsWrapper = styled.section`
  width: var(--width);
  margin: 0 auto;
  .meals {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 3fr));
    place-items: center;
    gap: 1.5rem;
    margin-top: 3rem;

    .single-meal {
      margin-bottom: 3rem;
      .meal-image-container {
        display: flex;
        justify-content: center;

        .meal-image {
          object-fit: cover;
          height: 16rem;
          width: 16rem;
        }
      }
    }
    .meal-text {
      text-align: center;
      margin-top: 0.75rem;
      h4 {
        color: var(--primary-clr);
        font-size: 1.8rem;
        font-weight: var(--fw-500);
      }
      p {
        color: var(--color-white);
        font-size: 1.2rem;
        width: 70%;
        margin: 0 auto;
        font-weight: var(--fw-400);
      }
    }
  }

  @media screen and (min-width: 992px) {
    margin-top: 5rem;
    .meals {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5rem;

      .meal-text {
        margin-top: 1rem;
        h4 {
          font-size: 27px;
        }
        p {
          font-size: 18px;
        }
      }
    }
  }
`;
export default MealsWrapper;
