import { type ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
    children: ReactNode;
};

const Card = (props: Props) => {
    const { children } = props;

    return (
        <SCard>{children}</SCard>
    )
}

const SCard = styled.div`
    background-color: #fff;
    box-shadow: #ddd 0px 0px 4px 2px;
    border-radius: 8px;
    padding: 16px
`

export default Card