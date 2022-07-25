import { useEffect, useState } from "react"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import Modal from "./components/Modal/Modal"
import Table from "./components/Table/Table"
import GlobalStyles, { Container } from "./Global/Global.styled"

const App = () => {
  const [isModalOpened, setIsModalOpened] = useState(false)

  const toggleModal = () => {
    setIsModalOpened((prev) => !prev)
  }

  const initialValues = {
    ID: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Location: "",
    Position: "",
  }
  const [formData, setFormData] = useState(initialValues)
  const [tableData, setTableData] = useState([])
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    const JsonData = JSON.parse(localStorage.getItem("tableData"))
    if (JsonData && JsonData.length > 0) {
      setTableData(JsonData)
    }
  }, [])

  useEffect(() => {
    const JsonData = JSON.stringify(tableData)
    localStorage.setItem("tableData", JsonData)
  }, [tableData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (editId) {
      const editTableRow = tableData.find((data) => data.id === editId)
      const updatedTableData = tableData.map((data) =>
        data.id === editTableRow.id
          ? {
              ...data,
              id: data.id,
              ID: formData.ID,
              FirstName: formData.FirstName,
              LastName: formData.LastName,
              Email: formData.Email,
              Phone: formData.Phone,
              Location: formData.Location,
              Position: formData.Position,
            }
          : {
              ...data,
              id: data.id,
              ID: data.ID,
              FirstName: data.FirstName,
              LastName: data.LastName,
              Email: data.Email,
              Phone: data.Phone,
              Location: data.Location,
              Position: data.Position,
            }
      )
      setTableData(updatedTableData)
      setFormData(initialValues)
      setIsModalOpened(false)
      setEditId(null)
    } else {
      const newEmployee = {
        id: new Date().valueOf().toString(),
        ID: formData.ID,
        FirstName: formData.FirstName,
        LastName: formData.LastName,
        Email: formData.Email,
        Phone: formData.Phone,
        Location: formData.Location,
        Position: formData.Position,
      }
      console.log(newEmployee)
      setTableData([...tableData, newEmployee])
      setFormData(initialValues)
      setIsModalOpened(false)
    }
  }

  const deleteTableData = (id) => {
    const updatedTableData = tableData.filter((data) => data.id !== id)
    setTableData(updatedTableData)
  }

  const editTableData = (id) => {
    const updateTableDataRow = tableData.find((data) => data.id === id)
    setIsModalOpened(true)
    setFormData(updateTableDataRow)
    setEditId(id)
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header toggleModal={toggleModal} />
        <Modal isModalOpened={isModalOpened} toggleModal={toggleModal}>
          <Form
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Modal>
        <Table
          tableData={tableData}
          deleteTableData={deleteTableData}
          editTableData={editTableData}
        />
      </Container>
    </>
  )
}
export default App
