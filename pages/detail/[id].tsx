import { useRouter } from "next/router"
import {
  useGetMovieCastAndCrewByIdQuery,
  useGetMoviesSimilarByIdQuery,
  useGetMovieStreamsByIdQuery
} from "../../src/services/services"
import React, { useEffect, useState } from "react"
import {
  Container,
  Controller,
  ErrorMsg,
  LeftBtn,
  RightBtn,
  Space,
  SwitchBox
} from "../../components/detail/style"
import MovieDetailSM from "../../components/detail/MovieDetailSM"
import MovieDetail from "../../components/detail/MovieDetail"
import MovieCast from "../../components/detail/MovieCast"
import CardList from "../../components/shared/CardList"
import MovieRecommendations from "../../components/detail/MovieRecommendations"
import Layout from "../../components/layout"

const Detail = () => {
  const [movieId, setMovieId] = useState("")
  // SM size 顯示與否（分成介紹/評論）
  const [state, setState] = useState(false)
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    if (!id) return
    setMovieId(id as string)
  }, [id])

  const { data: movieInfoData } = useGetMovieStreamsByIdQuery(movieId as string)
  const { data: moviePeopleData } = useGetMovieCastAndCrewByIdQuery(
    movieId as string
  )
  const {
    data: movieSimilarData,
    isSuccess,
    isError
  } = useGetMoviesSimilarByIdQuery(movieId as string)
  const switchBtnHandler = (direction: string) => {
    if (direction === "left") {
      setState(false)
    } else {
      setState(true)
    }
  }
  if (isError)
    return (
      <>
        <Layout>
          <ErrorMsg>API fatch failed (choose another movie)</ErrorMsg>
        </Layout>
      </>
    )
  return (
    <>
      <Layout>
        {isSuccess && (
          <Container>
            <MovieDetailSM movieData={movieInfoData} />
            <SwitchBox>
              <LeftBtn state={!state} onClick={() => switchBtnHandler("left")}>
                <a>
                  <span>介紹</span>
                </a>
              </LeftBtn>
              <RightBtn state={state} onClick={() => switchBtnHandler("right")}>
                <a>
                  <span>評論</span>
                </a>
              </RightBtn>
            </SwitchBox>
            {/* MovieDetail */}
            <Controller state={state}>
              <MovieDetail
                movieData={movieInfoData}
                peopleData={moviePeopleData}
              />
            </Controller>
            {/* Cast List */}
            <Controller state={state}>
              <MovieCast peopleData={moviePeopleData} />
            </Controller>
            {/* Recommendations */}
            <Controller state={!state}>
              <MovieRecommendations />
            </Controller>
            {/* Similar Movies */}
            <Controller state={state}>
              <CardList
                category="相關影片"
                data={movieSimilarData}
                isEvenRow={true}
                isOneRow={true}
              />
            </Controller>
            <Space />
          </Container>
        )}
      </Layout>
    </>
  )
}

export default Detail
