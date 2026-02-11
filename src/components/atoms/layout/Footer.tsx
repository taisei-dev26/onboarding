import styled from 'styled-components'

const Footer = () => {
  return (
    <SFooter>
        &copy; 2021 test Inc.
    </SFooter>
  )
}

const SFooter = styled.footer`
    background-color: #11999e;
    color: #fff;
    text-aligh: center;
    padding: 8px 0;
    position: fixed;
    bottom: 0;
    width: 100%
`

export default Footer