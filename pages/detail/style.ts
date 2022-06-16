import styled from "styled-components"
import { MainContainer } from "../../components/shared/Container/style"
import { MEDIA_QUERY_MD,MEDIA_QUERY_SM } from "../../contents/mediaRWD"

// TODO : 直接以電影id去搜尋整部資訊 更新redux
interface stateProps {
  state: boolean
}

export const Container = styled(MainContainer)`
  margin-top: 82px;
  margin-bottom: 46px;

  ${MEDIA_QUERY_MD} {
    padding: 0;
  }
  ${MEDIA_QUERY_SM} {
    margin-top: 0;
  }
`

export const SwitchBox = styled.div`
  display: none;

  ${MEDIA_QUERY_SM} {
    display: flex;
    justify-content: space-evenly;

    div {
      width: 100%;
      margin-right: 7px;
      text-align: center;
      cursor: pointer;
      position: relative;

      a {
        text-decoration: none;

        &:after {
          content: "";
          height: 5px;
          background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
          border-radius: 50px;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          opacity: 1;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }

        span {
          color: white;
          font-family: "Noto Sans TC";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
        }
      }
    }
  }
`

export const LeftBtn = styled.div<stateProps>`
  a:after {
    transform: ${(props) =>
    props.state ? "scaleX(1)" : "scaleX(0)"} !important;
  }
`
export const RightBtn = styled.div<stateProps>`
  a:after {
    transform: ${(props) =>
    props.state ? "scaleX(1)" : "scaleX(0)"} !important;
  }
`
export const Controller = styled.div<stateProps>`
  ${MEDIA_QUERY_SM} {
    display: ${(props) => props.state && "none"};
  }
`

export const Space = styled.div`
  height: 50px;
`