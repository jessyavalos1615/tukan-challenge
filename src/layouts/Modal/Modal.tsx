import React from "react";

import Button from "../../components/Button/Button";

import { ModalProps } from "./ModalTypes";
import { ButtonVariant } from "../../components/Button/ButtonTypes";
import {
  ModalBackground,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./Style";
import classNames from "classnames";

const Modal = ({
  title,
  onClose,
  onSubmit,
  children,
  shouldShow,
  disableSubmit,
}: ModalProps) => {
  return (
    <ModalBackground className={classNames({ show: shouldShow })}>
      <ModalContainer className={classNames("modal-container")}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button variant={ButtonVariant.secondary} onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={disableSubmit} variant={ButtonVariant.primary} onClick={onSubmit}>
            Generate
          </Button>
        </ModalFooter>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
