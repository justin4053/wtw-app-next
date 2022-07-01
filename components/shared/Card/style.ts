import styled from "styled-components"
import { MEDIA_QUERY_MD,MEDIA_QUERY_SM } from "../../../contents/mediaRWD"

export const CardWrap = styled.div<{ isSamllPic: boolean }>`
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 152px;

  p {
    font-family: "Noto Sans TC";
    font-weight: 400;
    font-size: 14px;
    margin-top: 4px;
  }
`
export const CardBox = styled.div<{ isSamllPic: boolean }>`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.48));
  }
`
export const CardImgBox = styled.div<{ isSamllPic: boolean }>`
  width: 152px;
  height: 201px;

  ${MEDIA_QUERY_MD} {
    height: ${(props) => (props.isSamllPic ? "190px" : "201px")};
  }

  ${MEDIA_QUERY_SM} {
    height: ${(props) => (props.isSamllPic ? "163px" : "190px")};
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 8px;
    background: linear-gradient(
      180deg,
      rgba(22, 22, 22, 0) 30.58%,
      rgba(22, 22, 22, 0.98) 100%
    );
  }
`
export const CardRating = styled.div`
  color: white;
  z-index: 1;
  margin: 0;
  padding: 2px;
  width: 33px;
  background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
  border-radius: 4px;
  position: absolute;
  right: 4px;
  bottom: 8px;
  font-family: "Roboto";
  font-weight: 800;
  font-size: 14px;
`
export const CardName = styled.div`
  color: white;
`