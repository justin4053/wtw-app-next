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
                  src="http://d.ifengimg.com/mw604/y0.ifengimg.com/ifengimcp/pic/20160418/5628dd6ecd9fa100f371_size30_w521_h534.jpg"
                  width={75}
                  height={75}
                  objectFit="cover"
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
