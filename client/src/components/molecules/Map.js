import styled from '@emotion/styled'

const StyledImg = styled.img`
  max-width: 100%;
  -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
`

const Map = ({ map }) => {
  return <StyledImg src={map} />
}

export default Map
