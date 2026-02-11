import type { ReactNode } from "react"
import styled from "styled-components"
import { BaseButton } from "./BaseButton"

type Props = {
    children: ReactNode
    onClick: () => void;
}

export const SecondaryButton = (props: Props) => {
const { children, onClick } = props
  return (
    <SButton onClick={onClick}>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
    background-color: #11999e;
`