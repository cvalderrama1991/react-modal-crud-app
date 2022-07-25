import { createPortal } from "react-dom"
import {
  CloseIcon,
  ModalCloseBtn,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from "./Modal.styled"

const Modal = ({ isModalOpened, children, toggleModal }) => {
  if (!isModalOpened) return null
  return createPortal(
    <div>
      <ModalOverlay>
        <ModalContainer>
          <ModalCloseBtn onClick={toggleModal}>
            <CloseIcon />
          </ModalCloseBtn>
          <ModalContent>{children}</ModalContent>
        </ModalContainer>
      </ModalOverlay>
    </div>,
    document.getElementById("modal")
  )
}
export default Modal
