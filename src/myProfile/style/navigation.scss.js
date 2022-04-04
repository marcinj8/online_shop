import Styled from 'styled-components';

export const StyledMyProfileNavigation = Styled.nav`
    border-bottom: 1px solid black;
    background: blue;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: white
`;

export const StyledMyProfileTitle = Styled.h2`
    margin: 14px;
`;
export const StyledMyProfileNavigationItems = Styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
`;

export const StyledMyProfileNavigationItem = Styled.li`
    padding: 18px;
    height: 100%;
    text-align: center;
    cursor: pointer;
    :hover{
        background: wheat;
        color: black;
    }
`;
