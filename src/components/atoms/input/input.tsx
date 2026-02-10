import styled from "styled-components"

type Props = {
    placeholder?: string
}

export const Input = (props: Props) => {
    const { placeholder = "" } = props

    return <SInput type="text" placeholder={placeholder} />;
}

const SInput = styled.input`
    padding: 8px 16px;
    border: solid #ddd 1px;
    border-radius: 9999px;
    outline: none;
`