import styled from "styled-components"
import { MainContainer } from "../../components/shared/Container/style"
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from "../../contents/mediaRWD"

export const Container = styled(MainContainer)`
  margin-top: 82px;
  margin-bottom: 46px;

  ${MEDIA_QUERY_MD} {
    padding: 0;
    border-radius: 0;
  }
  ${MEDIA_QUERY_SM} {
    margin-top: 0;
  }
`
