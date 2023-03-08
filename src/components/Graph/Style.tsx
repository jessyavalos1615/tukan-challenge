import styled from "styled-components";

export const GraphContainer = styled.div`
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;

  &:hover div:first-of-type {
    right: 0;
  }

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

export const GraphHeader = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const GraphTitle = styled.span`
  font-size: 16px;
`;

export const GraphActions = styled.div`
  position: absolute;
  right: -75px;

  display: flex;
  padding: 5px 5px 5px 15px;

  background-color: #0a1a42;
  border-radius: 20px 0 0 20px;

  transition: all 0.3s ease;

  & img {
    cursor: pointer;
  }

  & img:first-child {
    margin-right: 5px;
  }
`;
