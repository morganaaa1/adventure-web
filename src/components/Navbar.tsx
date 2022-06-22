import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: transparent;
    display: flex;
    justify-content: center;
    z-index: 50;
`

const Wrapper = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: space-between ;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;


const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    color:white ;
    font-size: 32px ;
    font-weight: bold;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Navbar = () => {
    return(
        <Container>
            <Wrapper>
                <Center>
                    <Logo>ADVENTURE.</Logo>
                </Center>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
