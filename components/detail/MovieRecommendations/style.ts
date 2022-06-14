import styled from "styled-components"
import { MEDIA_QUERY_MD } from "../../../contents/mediaRWD"
import { BasicBox } from "../../shared/Container/style"

export const RecommendationsBox = styled(BasicBox)`
  display: flex;
  flex-direction: column;
  height: 619px;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;

  ${MEDIA_QUERY_MD} {
    border-radius: 0;
  }
`
export const MyRecoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  div {
    margin-right: 5px;
    background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
    border-radius: 50px;
    width: 3px;
    height: 23px;
  }
  span {
    margin-right: 27px;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  img {
    width: 44px;
    height: 44px;
  }

  ${MEDIA_QUERY_MD} {
    justify-content: center;
    div {
      display: none;
    }
    span {
      display: none;
    }
  }
`
export const OthersRecoBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`
export const OthersWrap = styled.div`
  display: flex;
  background: #1b1e25;
  border-radius: 10px;
  height: 90px;
  padding: 10px 24px 10px 16px;
`
export const OthersImgBox = styled.div`
  img {
    width: 46px;
    height: 46px;
  }
`
export const OthersReco = styled.div`
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    margin: 0;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }
`
export const OthersName = styled.div``
export const OthersRatingBox = styled.div`
  img {
    width: 17px;
    height: 17px;
    margin-right: 10px;
  }
`