import { Btn, FormTitle, Input, Label, MainForm } from "./Form.styled"

const Form = ({ formData, handleChange, handleSubmit }) => {
  return (
    <MainForm onSubmit={handleSubmit}>
      <FormTitle>Employee Form</FormTitle>
      <Label>ID</Label>
      <Input
        type="text"
        name="ID"
        value={formData.ID}
        onChange={handleChange}
        required
      />
      <Label>First Name</Label>
      <Input
        type="text"
        name="FirstName"
        value={formData.FirstName}
        onChange={handleChange}
        required
      />
      <Label>Last Name</Label>
      <Input
        type="text"
        name="LastName"
        value={formData.LastName}
        onChange={handleChange}
        required
      />
      <Label>Email</Label>
      <Input
        type="text"
        name="Email"
        value={formData.Email}
        onChange={handleChange}
        required
      />
      <Label>Phone</Label>
      <Input
        type="text"
        name="Phone"
        value={formData.Phone}
        onChange={handleChange}
        required
      />
      <Label>Location</Label>
      <Input
        type="text"
        name="Location"
        value={formData.Location}
        onChange={handleChange}
        required
      />
      <Label>Position</Label>
      <Input
        type="text"
        name="Position"
        value={formData.Position}
        onChange={handleChange}
        required
      />
      <Btn>Add</Btn>
    </MainForm>
  )
}
export default Form
