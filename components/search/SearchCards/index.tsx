import { Container } from "./style"
import { thumbnailUrl } from "../../../contents/url"
import Card from "../../shared/Card"
import { CardContainer } from "../../shared/CardList/style"

const SearchCards = ({ data }: any) => {
  return (
    <Container>
      {data?.map((movie: any) => (
        <CardContainer key={movie.id}>
          <Card
            id={movie.id}
            src={`${thumbnailUrl}${movie?.poster_path}`}
            rating={movie?.vote_average}
            name={movie?.name || movie?.title}
            isSamllPic={false}
            isOneRow={false}
          />
        </CardContainer>
      ))}
    </Container>
  )
}

export default SearchCards
