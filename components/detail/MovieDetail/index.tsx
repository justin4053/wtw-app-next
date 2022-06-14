import { languagesTranslator } from "../../../contents/languages"
import { thumbnailUrl } from "../../../contents/url"
import {
  BtnMDBox,
  DetailBox,
  DetailBtn,
  DetailImage,
  DetailInfo,
  DetailVideo,
  GenresBox,
  LargeInfoBox,
  MiddleInfoBox,
  MovieBox,
  MovieRating,
  MovieTitle,
  SmallInfoBox
} from "./style"

// Interface
interface genreProps {
  id: string
  name: string
}

//TODO : 把any換掉
const MovieDetail = ({ movieData, peopleData }: any) => {
  return (
    <DetailBox>
      {/* Left */}
      <DetailVideo>
        <DetailImage
          src={`${thumbnailUrl}${
            movieData?.poster_path || movieData?.backdrop_path
          }`}
          width={323}
          height={430}
          objectFit="cover"
        />
      </DetailVideo>
      {/* Right */}
      <DetailInfo>
        <GenresBox>
          <div>
            {movieData?.genres.map((genre: genreProps) => (
              <p key={genre?.id}>{genre?.name}</p>
            ))}
          </div>
          {/* 加入片單 */}
          <BtnMDBox>
            <DetailBtn>加入片單</DetailBtn>
          </BtnMDBox>
        </GenresBox>
        {/* Movie Title */}
        <MovieBox>
          <MovieTitle>{movieData?.title}</MovieTitle>
          <MovieRating>{movieData?.vote_average}</MovieRating>
        </MovieBox>
        {/* Movie Info */}
        <LargeInfoBox>
          <MiddleInfoBox>
            <SmallInfoBox isRainbowBar>
              <div></div>
              <span>{movieData?.release_date}</span>
            </SmallInfoBox>
            <SmallInfoBox isRainbowBar>
              <div></div>
              <span>
                {languagesTranslator(movieData?.original_language) ||
                  movieData?.original_language}
              </span>
            </SmallInfoBox>
            <SmallInfoBox isRainbowBar>
              <div></div>
              <span>
                {Math.floor(movieData?.runtime / 60)}小時{" "}
                {Math.floor(movieData?.runtime % 60)}分鐘
              </span>
            </SmallInfoBox>
          </MiddleInfoBox>
          <SmallInfoBox isRainbowBar>
            <div></div>
            <span>導演 {peopleData?.crew[0].name}</span>
          </SmallInfoBox>
          <SmallInfoBox isRainbowBar>
            <div></div>
            <span>劇情介紹</span>
          </SmallInfoBox>
          <SmallInfoBox isRainbowBar={false}>
            <div></div>
            <span>{movieData?.overview}</span>
          </SmallInfoBox>
          <SmallInfoBox isRainbowBar>
            <div></div>
            <span>播放平台</span>
          </SmallInfoBox>
          <SmallInfoBox isRainbowBar={false}>
            <div></div>
            <span>
              <img src="/images/videoIcons/netflix-icon.png" alt="" />
              <img src="/images/videoIcons/appletv-icon.png" alt="" />
            </span>
          </SmallInfoBox>
        </LargeInfoBox>
      </DetailInfo>
    </DetailBox>
  )
}

export default MovieDetail
