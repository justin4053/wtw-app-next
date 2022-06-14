import Layout from "../../components/layout"
import SearchBlock from "../../components/search/SearchBlock"
import { Container } from "./style"

const MovieSearch = () => {
  //TODO: 接收url的type param後顯示不同的類型頁面(movie search or drama search)

  return (
    <Layout>
      <Container>
        <SearchBlock />
      </Container>
    </Layout>
  )
}

export default MovieSearch
