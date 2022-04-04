import styled from 'styled-components';

export const HeadlineStyled = styled.header`
    position: relative;
    width: 100%;
    height: 100vh;
`;

export const HeadlineImageStyled = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: ${props => props.isDisplayed ? 2 : 1}
`;

export const HeadlineTitleStyled = styled.h1`
    position: absolute;
    font-size: 3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    color: white;
    text-shadow: 0 0 2px black;
    @media(min-width: 400px) {
        font-size: 5rem;
    }
`;

export const SliderLeftButtonStyled = styled.img`
    position: absolute;
    top: 50%;
    left: 4%;
    width: 50px;
    height: 50px;
    z-index: 5;
    object-fit: cover;
    cursor: pointer;
    object-fit: cover;
`;

export const SliderRightButtonStyled = styled.img`
    position: absolute;
    top: 50%;
    right: 4%;
    width: 50px;
    height: 50px;
    z-index: 5;
    object-fit: cover;
    cursor: pointer;
    object-fit: cover;
`;

export const DotsNavSliderStyled = styled.div`
    position: absolute;
    bottom: 10%;
    z-index: 5;
    left: 50%;
    display: flex;
    justify-content: space-around;
    width: 100px;
    transform: translate(-50%);
`;

export const DotNavSliderStyled = styled.div`
    width: 20px;
    height: 20px;
    z-index: 5;
    border-radius: 50%;
    cursor: ${props => props.isActive ? 'default' : 'pointer'} ;
    background: ${props => props.isActive ? 'black' : 'gray'};
`;