import Banner from "../components/home/Banner"
import Layout from "../components/layout"
import HomeMeta from "../components/meta/HomeMeta"
import { HomeContainer, MoviesContainer } from "../components/home/style"
import { Movie } from "../typings"
import { baseUrl } from "../contents/url"
import requests from "../src/utils/requests"
import CardListWrap from "../components/home/CardListWrap"

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
        <HomeContainer>
          <Banner movies={props.netflixOriginals} />
          <MoviesContainer>
            <CardListWrap movies={props} />
          </MoviesContainer>
        </HomeContainer>
      </Layout>
    </>
  )
}

export default Home

// SSR
export const getStaticProps = async () => {
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
