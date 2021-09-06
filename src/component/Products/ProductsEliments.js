import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: #150f0f;
    color: #fff;
`;
export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;
export const ProductsCard = styled.div`
    margin: 1rem 2rem;
    line-height: 2;
    width: 300px;
`;
export const ProductsImg = styled.img`
    height: 300px;
    max-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
`;
export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2,5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;        
`
export const ProductsTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;        
`
export const ProductsInfo = styled.div`
    /* display: flex; */
    justify-content: center;
    align-items:center;
    padding: 2rem;
    text-align: center;
`
export const ProductsDesc = styled.p`
    margin-bottom: 0.7rem;
    color: #fff;
`
export const ProductsPrice = styled.p`
    margin-bottom: 0.6rem;
    font-size: 2rem;
`
export const ProductsButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    outline: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-in-out;

    &:hover{
        background: #ffc500;
        color: #000;
        cursor: pointer;
        transition: 0.2s ease-out;
    }

`