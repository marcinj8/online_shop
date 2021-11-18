import styled from "styled-components";

import faqBg from '../assets/faqBg.png';

export const FAQPageStyled = styled.section`
    overflow: hidden;
    padding-top: 30px;
    min-height: 100vh;
    width: 100%;
    background-image: url(${faqBg});
    background-repeat: repeat-y;
    background-size: contain;
`;

export const FAQParagraphTitleStyled = styled.h2`
    letter-spacing: 1px;
    font-size: 2rem;
    color: white;
    z-index: 2;
`;

export const FAQParagraphListStyled = styled.ul`
    min-width: 350px;
    max-width: 700px;
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const FAQParagraphStyled = styled.li`
    width: 100%;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    list-style-type: none;
`

export const FAQParagraphImageStyled = styled.h4`
    width: 90%;
    color: white;
    padding: 10px;
    text-align: left;
`;

export const FAQParagraphTextStyled = styled.span`
    text-align: center;
    color: white;
    text-shadow: 0 0 2px black;
    font-size: 1.1rem;
    width: 90%;
    padding: 10px;
`