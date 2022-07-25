import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`
export default GlobalStyles

export const Container = styled.div`
  background-color: white;
  width: 100%;
`

export const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`
