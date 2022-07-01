import styled from "styled-components"
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from "../../../contents/mediaRWD"
import { NextImage } from "../../shared/NextImage/style"

export const Nav = styled.nav<{ isScrolled: boolean }>`
  background: ${(props) =>
    props.isScrolled ? "rgba(27, 30, 37, 1)" : "rgba(27, 30, 37, 0.68)"};
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  height: 58px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
  position: fixed;
  top: 0;
  z-index: 999;

  ${MEDIA_QUERY_MD} {
    padding: 0 24px;
  }

  ${MEDIA_QUERY_SM} {
    padding: 0 16px;
  }
`

export const Logo = styled(NextImage)``
export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
// export const Logo = styled.img`
//   width: 38px;
//   height: 38px;
// `
export const Title = styled.p`
  min-width: 54px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);

  ${MEDIA_QUERY_SM} {
    font-size: 16px;
  }
`
export const Search = styled.div`
  margin-left: 20px;
  padding: 10px 10px 10px 16px;
  display: flex;
  align-items: center;
  width: 387px;
  height: 38px;
  border: 1px solid #686b72;
  border-radius: 8px;
  input {
    width: 100%;
    height: 100%;
    padding-left: 10.5px;
    color: #686b72;
    border: none;
    background-color: transparent;
    outline: none;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }
`
