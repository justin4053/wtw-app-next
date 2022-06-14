import CardList from "../../shared/CardList"

const CardListWrap = ({ movies }: any) => {
  return (
    <>
      <CardList
        category="熱門電影"
        data={movies.trendingNow}
        isEvenRow={false}
        isOneRow={false}
      />
      <CardList
        category="Netflix原創電影"
        data={movies.netflixOriginals}
        isEvenRow={true}
        isOneRow={false}
      />
      <CardList
        category="排行榜"
        data={movies.topRated}
        isEvenRow={false}
        isOneRow={false}
      />
      <CardList
        category="動作電影"
        data={movies.actionMovies}
        isEvenRow={true}
        isOneRow={false}
      />
      <CardList
        category="喜劇電影"
        data={movies.comedyMovies}
        isEvenRow={false}
        isOneRow={false}
      />
      <CardList
        category="恐怖電影"
        data={movies.horrorMovies}
        isEvenRow={true}
        isOneRow={false}
      />
      <CardList
        category="愛情電影"
        data={movies.romanceMovies}
        isEvenRow={false}
        isOneRow={false}
      />
      <CardList
        category="紀錄片"
        data={movies.documentaries}
        isEvenRow={true}
        isOneRow={false}
      />
    </>
  )
}

export default CardListWrap
