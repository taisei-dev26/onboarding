import styled from "styled-components";

type Props = {
    image: string;
    name: string;
};

const UserIconWithName = (props: Props) => {
    const { image, name } = props;
  return (
    <SContainer>
        <SImg height={190} width={200} src={image} alt={name} />
        <SName>{name}</SName>
    </SContainer>
  )
}

const SContainer = styled.div`
    text-align: center;
`

const SImg = styled.img`
    border-radius: 50%;
`

const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0
    color: #40514e
`

export default UserIconWithName