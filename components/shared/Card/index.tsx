import Link from "next/link"
import { NextImage } from "../NextImage/style"
import { CardBox, CardImgBox, CardName, CardRating, CardWrap } from "./style"

interface CardProps {
  src: string
  rating: number
  name: string
  isSamllPic: boolean
  isOneRow: boolean
  id: string
}

const Card = ({ src, id, rating, name, isSamllPic, isOneRow }: CardProps) => {
  return (
    <CardWrap isSamllPic={isSamllPic}>
      <Link href={`/detail/${id}`}>
        <a>
          <CardBox isSamllPic={isSamllPic}>
            <CardImgBox isSamllPic={isSamllPic}>
              <NextImage src={src} layout="fill" />
            </CardImgBox>
            <CardRating>{rating}</CardRating>
          </CardBox>
          <CardName>{name}</CardName>
        </a>
      </Link>
    </CardWrap>
  )
}

export default Card
