import styled from 'styled-components';

import workFlowBg from '../../assets/workflowBg.jpeg';

export const ContactPageSectionStyled = styled.section`
    width: 100%;
    padding-top: 10vh;
    position: relative;
    background-color: gray;
    background-image: url(${workFlowBg});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
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
`;

export const ContactPageTitleStyled = styled.h2`
    font-size: 2.5rem;
    padding: 5% 0;
    color: white;
`;
