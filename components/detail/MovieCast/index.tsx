import { thumbnailUrl } from "../../../contents/url"
import { CardContainer, CastBox, CastCard, CastImg, CastImgBox } from "./style"

// TODO: 增加peopleData的type
const MovieCast = ({ peopleData }: any) => {
  return (
    <CastBox>
      <CardContainer>
        {peopleData?.cast.map((peopleData: any) => (
          <CastCard key={peopleData.id}>
            {peopleData.profile_path ? (
              <CastImgBox>
                <CastImg
                  src={`${thumbnailUrl}${peopleData.profile_path}`}
                  width={75}
                  height={75}
                  objectFit="cover"
                />
              </CastImgBox>
            ) : (
              <CastImgBox>
                <CastImg
                  src={"/images/no-profile-cast.png"}
                  width={75}
                  height={75}
                />
              </CastImgBox>
            )}
            <p>{peopleData.name}</p>
          </CastCard>
        ))}
      </CardContainer>
    </CastBox>
  )
}

export default MovieCast
