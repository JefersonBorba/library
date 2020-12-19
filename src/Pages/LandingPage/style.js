import styled from "styled-components";

export const Holder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const BookDisplay = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    img:hover{
        cursor:pointer;
    }
`;