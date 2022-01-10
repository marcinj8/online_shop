import styled from 'styled-components';

export const StyledMyProfile = styled.section`
    width: 100%;
    padding-top: 10vh;
    position: relative;
    background-color: silver;
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
