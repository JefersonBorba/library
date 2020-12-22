import styled from "styled-components";

export const Holder = styled.div`
    background: #252525;
    width: 5rem;
    height: 100vh;
    position: absolute;
    transition: width 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 63px;
        height: 63px;
    }
    :hover{
        width: 10rem;
    }
`;