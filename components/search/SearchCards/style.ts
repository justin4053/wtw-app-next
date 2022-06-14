import styled from "styled-components"
import { MainContainer } from "../../shared/Container/style"

export const Container = styled(MainContainer)`
  margin-top: 12px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 10px;
  height: 100%;
`
export const CardContainer = styled.div`
  margin: 10px 0;
  padding: 0 8px;
`