import styled from "styled-components"
import { MEDIA_QUERY_MD } from "../../../contents/mediaRWD"
import { BtnSolid } from "../../shared/Button/style"
import { BasicBox } from "../../shared/Container/style"

interface SelectWrapProps {
  colorChanged: number
  selectId: number
}

interface BarProps {
  value: number
}

export const Container = styled.div``

export const SearchBox = styled(BasicBox)`
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-evenly;
  flex-direction: column;
  align-content: center;
  min-height: 324px;

  ${MEDIA_QUERY_MD} {
    border-radius: 0;
    padding: 24px;
  }
`
export const SortBox = styled(BasicBox)`
  margin-top: 12px;
  min-height: 68px;
  padding-left: 3.5rem;
  padding-right: 3.5rem;

  ${MEDIA_QUERY_MD} {
    border-radius: 0;
  }
`

export const SubBox = styled.div`
  margin-top: 1em;
`

export const SubTile = styled.div`
  display: flex;
  margin-right: 18px;
  margin-bottom: 12px;
  align-items: center;
  div:first-child {
    background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
    border-radius: 50px;
    width: 3px;
    height: 23px;
  }
  span {
    margin-left: 8px;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
`

export const SelectBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const SelectGenreWrap = styled.div<SelectWrapProps>`
  margin-bottom: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 66px;
  height: 28px;
  background: ${(props) =>
    props.selectId === props.colorChanged
      ? "linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%)"
      : "#161616"};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  p {
    font-family: "PingFang SC";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin: 0;
  }
`
export const SelectYearWrap = styled(SelectGenreWrap)``

export const BarWrap = styled.div`
  position: relative;
  margin-left: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Bar = styled.input.attrs({
  type: "range",
  min: "0",
  max: "10",
  step: "1"
})<BarProps>`
  appearance: none;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  outline: 0;
  width: 250px;
  height: 16px;
  border-radius: 50px;
  border: 3px solid #161616;
  background: ${(props) => `
  linear-gradient(to right,
    #161616 0%,
    #161616 ${props.value * 10}%,
    #C10171 ${props.value * 10}%,
    #5C00F2 100%);
    
  `};

  &::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none !important;
    width: 26px;
    height: 26px;
    background: ${(props) =>
      `
    url("data:image/svg+xml,%3Csvg width='26' height='26' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='55%25' font-size='16' fill='%23ffffff' font-family='sans-serif' text-anchor='middle' dominant-baseline='middle'%3E${props.value}%3C/text%3E%3C/svg%3E"),
    linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%)
    `};
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 4px solid #161616;
  }

  &::-webkit-range-thumb {
    appearance: none;
    -webkit-appearance: none !important;
    width: 26px;
    height: 26px;
    background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
    border-radius: 50%;
    border: 4px solid #161616;
  }
`
export const SearchBtn = styled(BtnSolid)`
  position: absolute;
  bottom: 1em;
  right: 1em;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  ${MEDIA_QUERY_MD} {
    margin-left: 1em;
    margin-top: 2em;
    position: relative;
  }
`

export const SelectSortWrap = styled(SelectGenreWrap)`
  width: 102px;
  height: 32px;
`
