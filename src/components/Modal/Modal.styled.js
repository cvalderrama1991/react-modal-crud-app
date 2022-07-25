import styled from "styled-components"
import { FaWindowClose } from "react-icons/fa"

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`
export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`

export const ModalContent = styled.div`
  padding: 0.5rem;
`

export const ModalCloseBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  outline: none;
  cursor: pointer;
  font-size: 3rem;
  color: black;
  position: absolute;
  right: 0rem;
  top: -0.75rem;
`
export const CloseIcon = styled(FaWindowClose)`
  font-size: inherit;
  color: inherit;
`
