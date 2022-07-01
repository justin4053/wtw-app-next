import styled from "styled-components"
import { MEDIA_QUERY_SM, MEDIA_QUERY_MD } from "../../../contents/mediaRWD"
import { BtnSolid } from "../../shared/Button/style"
import { BasicBox } from "../../shared/Container/style"
import { NextImage } from "../../shared/NextImage/style"

export const DetailBox = styled(BasicBox)`
  display: flex;

  ${MEDIA_QUERY_MD} {
    border-radius: 0;
  }

  ${MEDIA_QUERY_SM} {
    padding: 0;
    flex-direction: column;
    background: transparent;
  }
`
export const DetailVideo = styled.div`
  ${MEDIA_QUERY_SM} {
    display: none;
  }
`
export const DetailImage = styled(NextImage)`
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.48));
  border-radius: 20px;
`

export const DetailInfo = styled.div`
  margin-left: 35px;
  flex: 1;
`

export const GenresBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    display: flex;

    p {
      background: #161616;
      padding: 8px;
      border: 0.6px solid #ffffff;
      border-radius: 4px;
      margin-right: 10px;
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
    }
  }
`

export const BtnMDBox = styled.div`
  display: flex;

  ${MEDIA_QUERY_SM} {
    display: none !important;
  }
`

export const DetailBtn = styled(BtnSolid)`
  ${MEDIA_QUERY_SM} {
    width: 103px;
    height: 27px;
    margin-top: 8px;
  }
`

export const MovieBox = styled.div`
  display: flex;
  align-items: center;

  ${MEDIA_QUERY_SM} {
    display: none;
  }
`
export const MovieTitle = styled.div`
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 38px;

  ${MEDIA_QUERY_MD} {
    font-size: 30px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 25px;
  }
`
export const MovieRating = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
  margin-left: 18px;

  ${MEDIA_QUERY_SM} {
    margin: 0;
    font-size: 33px;
  }
`
export const LargeInfoBox = styled.div``
export const MiddleInfoBox = styled.div`
  display: flex;
`
export const SmallInfoBox = styled.div`
  display: flex;
  margin-right: 18px;
  margin-bottom: 12px;
  align-items: center;

  span {
    margin-left: 8px;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${MEDIA_QUERY_MD} {
    span {
      -webkit-line-clamp: 2;
    }
  }
`

export const HighLightBar = styled.div<{ isRainbowBar: boolean }>`
  background: ${(props) =>
    props.isRainbowBar
      ? "linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);"
      : null};
  border-radius: 50px;
  width: 3px;
  height: 23px;
`

export const StreamImageBox = styled.span`
  position: relative;
  width: 36px;
  height: 36px;
`
