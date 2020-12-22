import styled from "styled-components";

export const Holder = styled.div`
    background: #252525;
    width: 5rem;
    height: 100vh;
    position: absolute;
    transition: width 0.5s, background-color 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    div:last-child{
        margin: auto;
    }
    :hover{
        width: 15rem;
    }
`;
export const CustomButton = styled.div`
    width: 100%;
    background-color: #252525;
    transition: background-color 2s;
    img{
        width: 63px;
        height: 63px;
        margin: 5px 0;
        transition: filter .7s;
    }
    :hover{
        img{
            filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
        }
        cursor: pointer;
        background-color: #171717;
    }
`;