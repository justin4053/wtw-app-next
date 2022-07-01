import { languagesTranslator } from "../../../contents/languages"
import { thumbnailUrl } from "../../../contents/url"
import { NextImage } from "../../shared/NextImage/style"
import {
  BtnMDBox,
  DetailBox,
  DetailBtn,
  DetailImage,
  DetailInfo,
  DetailVideo,
  GenresBox,
  HighLightBar,
  LargeInfoBox,
  MiddleInfoBox,
  MovieBox,
  MovieRating,
  MovieTitle,
  SmallInfoBox,
  StreamImageBox
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
          priority
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
          <span>
            {movieData?.genres.map((genre: genreProps) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </span>
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
            <SmallInfoBox>
              <HighLightBar isRainbowBar />
              <span>{movieData?.release_date}</span>
            </SmallInfoBox>
            <SmallInfoBox>
              <HighLightBar isRainbowBar />
              <span>
                {languagesTranslator(movieData?.original_language) ||
                  movieData?.original_language}
              </span>
            </SmallInfoBox>
            <SmallInfoBox>
              <HighLightBar isRainbowBar />
              <span>
                {Math.floor(movieData?.runtime / 60)}小時{" "}
                {Math.floor(movieData?.runtime % 60)}分鐘
              </span>
            </SmallInfoBox>
          </MiddleInfoBox>
          <SmallInfoBox>
            <HighLightBar isRainbowBar />
            <span>導演 {peopleData?.crew[0].name}</span>
          </SmallInfoBox>
          <SmallInfoBox>
            <HighLightBar isRainbowBar />
            <span>劇情介紹</span>
          </SmallInfoBox>
          <SmallInfoBox>
            <HighLightBar isRainbowBar={false} />
            <span>{movieData?.overview}</span>
          </SmallInfoBox>
          <SmallInfoBox>
            <HighLightBar isRainbowBar />
            <span>播放平台</span>
          </SmallInfoBox>
          <SmallInfoBox>
            <HighLightBar isRainbowBar={false} />
            <StreamImageBox>
              <NextImage
                src="/images/videoIcons/netflix-icon.png"
                layout="fill"
              />
            </StreamImageBox>
            <StreamImageBox>
              <NextImage
                src="/images/videoIcons/appletv-icon.png"
                layout="fill"
              />
            </StreamImageBox>
          </SmallInfoBox>
        </LargeInfoBox>
      </DetailInfo>
    </DetailBox>
  )
}

export default MovieDetail
