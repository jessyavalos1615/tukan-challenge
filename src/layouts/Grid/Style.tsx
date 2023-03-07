import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-gap: 30px 10px;

  @media (min-width: ${({ theme }) => theme.screen_sizes.mobileS}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.screen_sizes.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.screen_sizes.laptopL}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
