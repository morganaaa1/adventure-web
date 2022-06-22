import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  z-index: 50;
`

const Logo = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: bold;
`

const Navbar = () => {
  return (
    <Container>
      <Logo>ADVENTURE.</Logo>
    </Container>
  )
}

export default Navbar
