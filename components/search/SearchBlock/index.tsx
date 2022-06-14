import { useState } from "react"
import { AllGenres } from "../../../contents/movieGenres"
import { useGetMoviesByParamsQuery } from "../../../src/services/services"
import SearchCards from "../SearchCards"

import {
  Bar,
  BarWrap,
  Container,
  SearchBox,
  SearchBtn,
  SelectBox,
  SelectGenreWrap,
  SelectSortWrap,
  SelectYearWrap,
  SortBox,
  SubBox,
  SubTile
} from "./style"

const SearchBlock = () => {
  const [genreActiveId, setGenreActiveId] = useState<number>(0)
  const [yearActiveId, setYearActiveId] = useState<number>(0)
  const [value, setValue] = useState<number>(5)
  const [sortActiveId, setSortActiveId] = useState<number>(0)
  const [data, setData] = useState<any>()
  const {
    data: searchData,
    isLoading,
    isSuccess
  } = useGetMoviesByParamsQuery({
    genre: genreActiveId,
    year: yearActiveId,
    value: value
  })
  const currentTime = new Date()
  const yearArray: number[] = [...Array(13)].map(
    (e, i) => currentTime.getFullYear() - i
  )
  return (
    <>
      {!isSuccess ? (
        <></>
      ) : (
        <Container>
          <SearchBox>
            <SubBox>
              <SubTile>
                <div></div>
                <span>類型</span>
              </SubTile>
              <SelectBox>
                <SelectGenreWrap
                  onClick={() => setGenreActiveId(0)}
                  colorChanged={genreActiveId}
                  selectId={0}
                >
                  <p>全部</p>
                </SelectGenreWrap>
                {AllGenres.map((genres) => (
                  <SelectGenreWrap
                    // TODO: 試試看可不可以傳key值進去做比較,取代movieId
                    key={genres.id}
                    onClick={() => setGenreActiveId(genres.id)}
                    colorChanged={genreActiveId}
                    selectId={genres.id}
                  >
                    <p>{genres["zh-name"]}</p>
                  </SelectGenreWrap>
                ))}
              </SelectBox>
            </SubBox>
            <SubBox>
              <SubTile>
                <div></div>
                <span>年份</span>
              </SubTile>
              <SelectBox>
                <SelectYearWrap
                  onClick={() => setYearActiveId(0)}
                  colorChanged={yearActiveId}
                  selectId={0}
                >
                  <p>全部</p>
                </SelectYearWrap>
                {yearArray.map((year) => (
                  <SelectYearWrap
                    key={year}
                    onClick={() => setYearActiveId(year)}
                    colorChanged={yearActiveId}
                    selectId={year}
                  >
                    <p>{year}</p>
                  </SelectYearWrap>
                ))}
              </SelectBox>
            </SubBox>
            <SubBox>
              <SubTile>
                <div></div>
                <span>評分</span>
                <BarWrap>
                  0
                  <Bar
                    className="range-consideration"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                  />
                  10
                </BarWrap>
              </SubTile>
              <SearchBtn onClick={() => setData(searchData)}>搜尋</SearchBtn>
            </SubBox>
          </SearchBox>
          <SortBox>
            <SelectSortWrap
              onClick={() => setSortActiveId(0)}
              colorChanged={sortActiveId}
              selectId={0}
            >
              <p>人氣</p>
            </SelectSortWrap>
            <SelectSortWrap
              onClick={() => setSortActiveId(1)}
              colorChanged={sortActiveId}
              selectId={1}
            >
              <p>評分</p>
            </SelectSortWrap>
            <SelectSortWrap
              onClick={() => setSortActiveId(2)}
              colorChanged={sortActiveId}
              selectId={2}
            >
              <p>上映日</p>
            </SelectSortWrap>
            <SelectSortWrap
              onClick={() => setSortActiveId(3)}
              colorChanged={sortActiveId}
              selectId={3}
            >
              <p>片名</p>
            </SelectSortWrap>
          </SortBox>
          <SearchCards data={data} />
        </Container>
      )}
    </>
  )
}

export default SearchBlock
