import styled from "styled-components";

export const GraphContainer = styled.div`
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.screen_sizes.mobileS}) {
    width: 400px;
  }

  @media (min-width: ${({ theme }) => theme.screen_sizes.mobileM}) {
    width: 300px;
  }

  @media (min-width: ${({ theme }) => theme.screen_sizes.mobileL}) {
    width: 400px;
  }

  @media (min-width: ${({ theme }) => theme.screen_sizes.tablet}) {
    width: 700px;
  }

  @media (min-width: ${({ theme }) => theme.screen_sizes.laptop}) {
    width: 450px;
  }

  @media (min-width: ${({ theme }) => theme.screen_sizes.laptopL}) {
    width: 400px;
  }
`;

export const GraphTitle = styled.span`
  font-size: 16px;
`;
