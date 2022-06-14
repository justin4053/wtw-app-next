import { ReactNode } from "react"
import Link from "next/link"
import { thumbnailUrl } from "../../../contents/url"
import {
  Background,
  BannerAddToList,
  BannerBtn,
  BannerDesc,
  BannerInfo,
  BannerMoreInfo,
  BannerRating,
  BannerTitle,
  Carousel,
  DotsBox,
  DotsUl,
  Wrap
} from "./style"

const Banner = ({ movies }: any) => {
  const selectMovies = movies?.slice(0, 10)
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    appendDots: (dots: ReactNode) => (
      <DotsBox>
        <DotsUl>{dots}</DotsUl>
      </DotsBox>
    )
  }
  return (
    <>
      <Carousel {...settings}>
        {selectMovies?.map((movie: any) => (
          <Wrap key={movie?.id}>
            <Background bgUrl={`${thumbnailUrl}${movie?.backdrop_path}`}>
              <BannerInfo>
                <BannerRating>{movie?.vote_average}</BannerRating>
                <BannerTitle>{movie?.name || movie.title}</BannerTitle>
                <BannerDesc>{movie?.overview}</BannerDesc>
                <BannerBtn>
                  <Link href={`/detail/${movie.id}`}>
                    <BannerMoreInfo>更多資訊</BannerMoreInfo>
                  </Link>
                  <BannerAddToList>加入片單</BannerAddToList>
                </BannerBtn>
              </BannerInfo>
            </Background>
          </Wrap>
        ))}
      </Carousel>
    </>
  )
}

export default Banner
