import React from 'react';
import { FocusOn } from 'react-focus-on';
import styled from 'styled-components';

import Portal from './Portal';
import Backdrop from './Backdrop';
import Modal from './Modal';

interface Props {
  className?: string;
  close: () => void;
}

export const ModalContainer: React.FC<Props> = ({
  className,
  close,
  children
}) => {
  return (
    <Portal>
      <Backdrop />
      <StyledFocus onClickOutside={close} onEscapeKey={close}>
        <Modal className={className}>
          {React.Children.map(children as React.ReactElement[], function (
            child: React.ReactElement
          ) {
            return child && React.cloneElement(child, { close });
          })}
        </Modal>
      </StyledFocus>
    </Portal>
  );
};

const StyledFocus = styled(FocusOn)`
  height: 100vh;
`;
