import * as React from "react";
import { FunctionComponent, useState } from "react";
import { Modal, ModalProps } from "./Modal";

interface ActionComponentProps {
  [key: string]: any;
}

interface ModalWithStateProps extends ModalProps {
  ActionComponent: FunctionComponent<ActionComponentProps>;
}

export const ModalWithState: FunctionComponent<ModalWithStateProps> = React.memo(
  ({ ActionComponent, ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <ActionComponent
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
        />
        <Modal {...rest} isOpen={isOpen} close={() => setIsOpen(false)} />
      </>
    );
  }
);
