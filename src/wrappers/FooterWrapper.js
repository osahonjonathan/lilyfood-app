import styled from "styled-components";

const FooterWrapper = styled.section`
  .footer {
    display: grid;
    background-color: #0b0d17;
    color: var(--color-white);
    padding: 1rem;
    text-align: center;
    border-bottom: solid 2px var(--color-white);

    .footer-links {
      display: grid;
      gap: 0.5rem;

      a {
        font-size: 1.1rem;
        letter-spacing: 1px;
      }
    }

    h3 {
      font-size: 1.5rem;
      letter-spacing: 4px;
      margin-top: 2.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    .footer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 20%;

      .company,
      .support,
      .legal {
        height: 18%;
      }

      .footer-links {
        a {
          text-align: left;
          font-size: 0.85rem;
        }
      }

      h3 {
        font-size: 1.8rem;
        text-align: left;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .footer {
      height: 35%;
      .company,
      .support,
      .legal {
        height: 30%;
      }
    }
  }
`;

export default FooterWrapper;
