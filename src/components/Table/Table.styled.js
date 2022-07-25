import styled from "styled-components"

export const TableContainer = styled.table`
  width: 100%;
  min-height: 100vh;
  padding-top: 3rem;
`
export const TableHead = styled.thead`
  display: grid;

  tr {
    border-top: 2px solid grey;
    border-bottom: 2px solid grey;
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    justify-content: space-around;
    width: 100%;
  }
`
export const TableBody = styled.tbody`
  display: grid;
  width: 100%;

  tr {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid grey;

    td {
      button {
        border: none;
        height: 2rem;
        padding: 0 0.25rem;
        cursor: pointer;
        background-color: royalblue;
        color: white;
        margin-right: 2px;
        border-radius: 0.25rem;
        font-weight: bold;

        &:last-of-type {
          background-color: red;
        }
      }
    }
  }
`
