import React from "react";

import {
  ModalBackground,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./Style";
import { ModalProps } from "./ModalTypes";
import Button from "../../components/Button/Button";
import { ButtonVariant } from "../../components/Button/ButtonTypes";

const Modal = ({ children, title }: ModalProps) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button variant={ButtonVariant.secondary}>Cancel</Button>
          <Button variant={ButtonVariant.primary}>Generate</Button>
        </ModalFooter>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
