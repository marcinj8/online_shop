import styled from 'styled-components';

import whyUsBg from '../../assets/whyUs.jpg';

export const WhyUsPageStyled = styled.section`
  overflow: hidden;
  min-height: 100vh;
  background-image: url(${whyUsBg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WhyUsParagraphTitleStyled = styled.h2`
  letter-spacing: 1px;
  margin-top: 20px;
  font-size: 2rem;
  color: black;
  z-index: 2;
`;

export const WhyUsParagraphListStyled = styled.ul`
  min-width: 300px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const WhyUsParagraphStyled = styled.li`
  width: 100%;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  list-style-type: none;
  transform: translateX(${(props) => (props.toLeft ? '-10%' : '+10%')});
  @media (min-width: 600px) {
    transform: translateX(${(props) => (props.toLeft ? '-18%' : '+18%')});
  }
`;

export const WhyUsParagraphImageStyled = styled.img`
  box-sizing: border-box;
  width: 100px;
  padding: 10px;
  @media (min-width: 600px) {
    width: 120px;
  }
`;

export const WhyUsParagraphTextStyled = styled.span`
  align-self: center;
  font-weight: bolder;
  font-size: 1.2rem;
  width: 150px;
  padding: 10px;
  @media (min-width: 600px) {
    font-weight: bold;
    font-size: 1.6rem;
    width: 250px;
  }
`;
