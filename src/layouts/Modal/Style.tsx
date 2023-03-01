import styled from "styled-components";

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  display: inline-block;
  min-width: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
`;

export const ModalTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

export const ModalBody = styled.div`
  padding: 20px 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 10px;
  height: 70px;

  & button:first-of-type {
    margin-right: 10px;
  }
`;
