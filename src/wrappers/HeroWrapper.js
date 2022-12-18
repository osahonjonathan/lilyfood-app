import styled from "styled-components";

const HeroWrapper = styled.section`
  width: var(--width);
  margin: 0 auto;
  .hero {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
  }
  .hero-text {
    display: grid;
    place-items: center;
    gap: 0;
    text-align: center;
    width: 87vw;
    margin: 0 auto;
    h3 {
      font-size: 1.8rem;
      color: var(--color-white);
      span {
        color: var(--primary-clr);
      }
    }
    p {
      font-size: 1rem;
      color: var(--color-white);
    }
  }

  .hero-image-container {
    display: flex;
    justify-content: center;

    .hero-img {
      object-fit: cover;
      height: 16rem;
      width: 16rem;
    }
  }

  @media screen and (min-width: 992px) {
    .hero {
      gap: 9rem;
      margin-top: 5rem;
    }
    .hero-img {
      align-self: end;
    }
    .hero-text {
      text-align: left;
      width: 45vw;
      margin: 0 auto;
      h3 {
        font-size: 50px;
        letter-spacing: 2.5px;
        font-weight: var(--fw-700);
      }
      p {
        font-size: 18px;
        margin-top: 2rem;
        letter-spacing: 2px;
        font-weight: var(--fw-500);
      }
    }
  }
`;
export default HeroWrapper;
