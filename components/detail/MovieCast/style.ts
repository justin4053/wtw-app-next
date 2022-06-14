import styled from "styled-components"
import { MEDIA_QUERY_MD } from "../../../contents/mediaRWD"
import { BasicBox } from "../../shared/Container/style"
import { NextImage } from "../../shared/NextImage/style"

export const CastBox = styled(BasicBox)`
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 12px;
  height: 136px;

  ${MEDIA_QUERY_MD} {
    border-radius: 0;
    margin-bottom: 12px;
  }
`

export const CardContainer = styled.div`
  align-items: center;
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const CastImgBox = styled.div`
  width: 75px;
  height: 75px;
`

export const CastImg = styled(NextImage)`
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.48));
  border-radius: 12px;
`

export const CastCard = styled.div`
  margin: 0 6px;
  text-align: center;

  p {
    font-family: "Roboto";
    line-height: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
