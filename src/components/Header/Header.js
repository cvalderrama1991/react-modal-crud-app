import { MainHeader, ModalBtn } from "./Header.styled"

const Header = ({ toggleModal }) => {
  return (
    <MainHeader>
      <h2>Employee Database</h2>
      <ModalBtn onClick={toggleModal}>Add Employee</ModalBtn>
    </MainHeader>
  )
}
export default Header
