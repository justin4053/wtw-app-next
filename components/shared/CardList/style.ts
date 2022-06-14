import styled from "styled-components"
import { MEDIA_QUERY_MD,MEDIA_QUERY_SM } from "../../../contents/mediaRWD"

interface MoviesBoxProps {
  isEvenRow: boolean
  isOneRow: boolean
}

export const ComponentBox = styled.div<{ isEvenRow: boolean }>`
  background: ${(props) =>
    props.isEvenRow ? "rgba(104, 107, 114, 0.1)" : null};
  border-radius: 20px;

  ${MEDIA_QUERY_MD} {
    border-radius: 0px;
  }
`

export const InnerBox = styled.div<{ isEvenRow: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 0px 50px;

  ${MEDIA_QUERY_MD} {
    padding: ${(props) => (props.isEvenRow ? "16px 0px 0px" : "16px 0px 0px")};
  }
`

export const MoviesBox = styled.div<MoviesBoxProps>`
  display: flex;
  margin: 8px 6.5em 0px;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }

  ${MEDIA_QUERY_MD} {
    margin: 0px;
    flex-wrap: ${(props) =>
    props.isOneRow ? "nowrap" : props.isEvenRow ? "wrap" : null};
    display: ${(props) =>
    props.isOneRow ? "flex" : props.isEvenRow ? "grid" : "flex"};
    grid-template-columns: repeat(5, 1fr);
  }

  ${MEDIA_QUERY_SM} {
    margin: 0px;
    flex-wrap: ${(props) =>
    props.isOneRow ? "nowrap" : props.isEvenRow ? "wrap" : null};
    display: ${(props) =>
    props.isOneRow ? "flex" : props.isEvenRow ? "grid" : "flex"};
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ArrowBox = styled.div`
  cursor: pointer;
  position: absolute;
  
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`

export const ArrowLeftBox = styled(ArrowBox)`
  left: 2em;
`

export const ArrowRightBox = styled(ArrowBox)`
  right: 2em;
`

export const Title = styled.p`
  margin: 0 0 0 7rem;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  ${MEDIA_QUERY_MD} {
    margin-left: 0;
    padding-left: 8px;
  }
`
export const CardContainer = styled.div`
  margin: 10px 0;
  padding: 0 8px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scale(1.05);
  }

  ${MEDIA_QUERY_MD} {
    padding: 0 4.5px;
    margin: 20px 0 50px;
  }
`