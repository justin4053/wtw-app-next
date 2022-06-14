import type { NextPage } from "next"
import Banner from "../components/home/Banner"
import Layout from "../components/layout"
import HomeMeta from "../components/meta/HomeMeta"
import { Container, MoviesContainer } from "./style"
import CardList from "../components/shared/CardList"
import { Movie } from "../typings"
import { baseUrl } from "../contents/url"
import requests from "../src/utils/requests"

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Home: React.FC<Props> = (props: Props) => {
  return (
    <>
      <HomeMeta />
      <Layout>
        <Container>
          <Banner movies={props.trendingNow} />
          <MoviesContainer>
            <CardList
              category="熱門電影"
              data={props.trendingNow}
              isEvenRow={false}
              isOneRow={false}
            />
            <CardList
              category="Netflix原創電影"
              data={props.netflixOriginals}
              isEvenRow={true}
              isOneRow={false}
            />
            <CardList
              category="排行榜"
              data={props.topRated}
              isEvenRow={false}
              isOneRow={false}
            />
            <CardList
              category="動作電影"
              data={props.actionMovies}
              isEvenRow={true}
              isOneRow={false}
            />
            <CardList
              category="喜劇電影"
              data={props.comedyMovies}
              isEvenRow={false}
              isOneRow={false}
            />
            <CardList
              category="恐怖電影"
              data={props.horrorMovies}
              isEvenRow={true}
              isOneRow={false}
            />
            <CardList
              category="愛情電影"
              data={props.romanceMovies}
              isEvenRow={false}
              isOneRow={false}
            />
            <CardList
              category="紀錄片"
              data={props.documentaries}
              isEvenRow={true}
              isOneRow={false}
            />
          </MoviesContainer>
        </Container>
      </Layout>
    </>
  )
}

export default Home

// SSR
export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries
  ] = await Promise.all([
    fetch(`${baseUrl}${requests.fetchNetflixOriginals}`).then((res) =>
      res.json()
    ),
    fetch(`${baseUrl}${requests.fetchTrending}`).then((res) => res.json()),
    fetch(`${baseUrl}${requests.fetchTopRated}`).then((res) => res.json()),
    fetch(`${baseUrl}${requests.fetchActionMovies}`).then((res) => res.json()),
    fetch(`${baseUrl}${requests.fetchComedyMovies}`).then((res) => res.json()),
    fetch(`${baseUrl}${requests.fetchHorrorMovies}`).then((res) => res.json()),
    fetch(`${baseUrl}${requests.fetchRomanceMovies}`).then((res) => res.json()),
    fetch(`${baseUrl}${requests.fetchDocumentaries}`).then((res) => res.json())
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results
    }
  }
}
