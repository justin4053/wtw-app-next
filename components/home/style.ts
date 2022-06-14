import styled from "styled-components"
import { MEDIA_QUERY_MD } from "../../contents/mediaRWD"

export const HomeContainer = styled.div`
  min-height: calc(100vh - 58px);
  overflow-x: hidden;
  position: relative;
`
export const MoviesContainer = styled.main`
  padding: 0 calc(3.5vw);
  margin-top: -6rem;

  ${MEDIA_QUERY_MD} {
    padding: 0;
    margin-top: -3rem;
  }
`
export const CopyRight = styled.div`
  color: #686b72;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-top: 100px;
  text-align: center;
`
