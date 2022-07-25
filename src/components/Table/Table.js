import { TableBody, TableContainer, TableHead } from "./Table.styled"

const Table = ({ tableData, deleteTableData, editTableData }) => {
  return (
    <TableContainer>
      <TableHead>
        <tr>
          <th>ID</th>
          <th>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </TableHead>
      <TableBody>
        {tableData.map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.ID}</td>
              <td>{data.FirstName}</td>
              <td>{data.LastName}</td>
              <td>{data.Email}</td>
              <td>{data.Phone}</td>
              <td>{data.Location}</td>
              <td>{data.Position}</td>
              <td>
                <button onClick={() => editTableData(data.id)}>Edit</button>
                <button onClick={() => deleteTableData(data.id)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </TableBody>
    </TableContainer>
  )
}
export default Table
