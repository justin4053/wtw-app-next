import { thumbnailUrl } from "../../../contents/url"
import {
  DetailBackGround,
  DetailBtn,
  MovieBoxSMSize,
  MovieRating,
  MovieTitle
} from "./style"

const MovieDetailSM = ({ movieData }: any) => {
  return (
    <DetailBackGround bgUrl={`${thumbnailUrl}${movieData?.backdrop_path}`}>
      <MovieBoxSMSize>
        <MovieTitle>{movieData?.title}</MovieTitle>
        <MovieRating>{movieData?.vote_average}</MovieRating>
        <DetailBtn>加入片單</DetailBtn>
      </MovieBoxSMSize>
    </DetailBackGround>
  )
}

export default MovieDetailSM
