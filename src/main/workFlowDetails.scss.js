import styled from 'styled-components';

import workFlowBg from '../assets/workflowBg.jpeg';

export const WorkFlowDetailsSectionStyled = styled.section`
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: 0;
    padding: 25px 10px 15vh 10px;
    background-image: url(${workFlowBg});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    &::before {
        background-color: rgba(0, 0, 0, 0.45);
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    @media(min-width: 600px){
        padding-bottom: 5vh;
    }
`;

export const WorkFlowTitleStyled = styled.h2`
    margin: 30px auto;
    letter-spacing: 1px;
    font-size: 2rem;
    color: white;
    z-index: 2;
`;

export const WorkFlowDetailsArticleStyled = styled.article`
    display: flex;
    flex-direction: column;
    width: 80%;
    min-width: 250px;
    max-width: 1100px;
    margin: 0 auto;
`;

export const WorkFlowParagraphTitleStyled = styled.h3`
    margin: 10px auto;
    letter-spacing: 1px;
    color: white;
`;


export const WorkFlowDetailsParagraphStyled = styled.div`
    left: 100%;
    width: 250px;
    margin: 20px auto;  justify-content: center;
    align-self: center;
    list-style-type: none;
    transform: translateX(${props => props.toLeft ? '-15%' : '+15%'}) ;
    padding: 0;
    color:  white;
    text-shadow: 0 0 1px black;
    font-size: 1rem;
    text-align: ${props => props.toLeft ? 'left' : 'right'};
    @media(min-width: 570px) {
    font-size: 1.3rem;
        width: 450px;
    }
  
`;