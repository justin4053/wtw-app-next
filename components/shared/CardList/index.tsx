import { useEffect, useRef, useState } from "react"
import { thumbnailUrl } from "../../../contents/url"
import Card from "../Card"
import { NextImage } from "../NextImage/style"
import {
  ArrowLeftBox,
  ArrowRightBox,
  CardContainer,
  ComponentBox,
  InnerBox,
  MoviesBox,
  Title
} from "./style"

interface Props {
  category: string
  data: any
  isEvenRow: boolean
  isOneRow: boolean
}

const CardList = ({ category, data, isEvenRow, isOneRow }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)
  const [selectData, setSelectData] = useState(data)

  // 判斷Device類型去切割Data數目(不同)
  const NewData = () => {
    if (window.innerWidth <= 428 && isEvenRow) {
      setSelectData(data?.slice(0, 6))
    } else if (window.innerWidth <= 768 && isEvenRow) {
      setSelectData(data?.slice(0, 10))
    } else {
      setSelectData(data)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", NewData)
    NewData()
    return () => {
      window.removeEventListener("resize", NewData)
    }
  }, [NewData])

  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }
  return (
    <ComponentBox isEvenRow={isEvenRow}>
      <InnerBox isEvenRow={isEvenRow}>
        <Title>{category}</Title>
        <ArrowLeftBox onClick={() => handleClick("left")}>
          {/* <img src="/images/arrow-left-solid.png" alt="" /> */}
          <NextImage
            src="/images/arrow-left-solid.png"
            width={50}
            height={50}
          />
        </ArrowLeftBox>
        <MoviesBox ref={rowRef} isEvenRow={isEvenRow} isOneRow={isOneRow}>
          {selectData?.map((movie: any) => (
            <CardContainer key={movie.id}>
              <Card
                id={movie.id}
                src={`${thumbnailUrl}${movie?.poster_path}`}
                rating={movie?.vote_average}
                name={movie?.name || movie?.title}
                isSamllPic={isEvenRow}
                isOneRow={isOneRow}
              />
            </CardContainer>
          ))}
        </MoviesBox>
        <ArrowRightBox onClick={() => handleClick("right")}>
          <NextImage
            src="/images/arrow-right-solid.png"
            width={50}
            height={50}
          />
        </ArrowRightBox>
      </InnerBox>
    </ComponentBox>
  )
}

export default CardList
