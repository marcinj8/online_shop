import styled from "styled-components";

import whyUsBg from '../assets/whyUs.jpg';

export const WhyUsPageStyled = styled.section`
    overflow: hidden;
    min-height: 100vh;
    background-image: url(${whyUsBg});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const WhyUsParagraphTitleStyled = styled.h2`
    letter-spacing: 1px;
    font-size: 2rem;
    color: black;
    z-index: 2;
`;

export const WhyUsParagraphListStyled = styled.ul`
    min-width: 350px;
    max-width: 700px;
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-self: center;
`

export const WhyUsParagraphStyled = styled.li`
    width: 100%;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    align-self: center;
    list-style-type: none;
    transform: translateX(${props => props.toLeft ? '-15%' : '15%'});
`

export const WhyUsParagraphImageStyled = styled.img`
    width: 120px;
    padding: 10px;
`;

export const WhyUsParagraphTextStyled = styled.span`
    align-self: center;
    width: 150px;
    padding: 10px;
`