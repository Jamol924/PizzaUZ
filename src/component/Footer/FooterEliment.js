import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
    background: #0d0909;
`
export const FooterWraper = styled.div`
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
`
export const SocialMedia = styled.section`
    max-width:1300px;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 36px auto 0 auto;


    @media screen and (max-width:840px){
        flex-direction: column;
    }
`
export const SocialLogo =styled(Link)`
    color: #fff;
    justify-self: start;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 16px;
    text-decoration: none;

`

export const SocialIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`