import Styled from 'styled-components';

export const StyledMyProfileData = Styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media(min-width:600px){
        flex-direction: row
    }
`;

export const StyledMyProfileDataContent = Styled.article`
    width: 100%;
`;
