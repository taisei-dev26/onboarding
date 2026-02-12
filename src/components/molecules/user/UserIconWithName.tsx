import styled from "styled-components";
import { useUserStore } from "../../../stores/userStore";

type Props = {
    image: string;
    name: string;
};

const UserIconWithName = (props: Props) => {
    const { image, name } = props;
    const isAdmin = useUserStore((state) => state.userInfo?.isAdmin ?? false)

    return (
    <SContainer>
        <SImg height={190} width={200} src={image} alt={name} />
        <SName>{name}</SName>
        {isAdmin && <SEdit>編集</SEdit>}
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

const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`

export default UserIconWithName