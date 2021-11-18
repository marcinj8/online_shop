import styled from "styled-components";

export const FooterStyled = styled.div`
  position: absolute;
  padding: 5px;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 5vh;
  height: 16vh;
  border-top: 2px solid black;
  box-sizing: border-box;
  background: rgba(30, 130, 76, 1);
  background: white;
  color: rgba(54, 215, 183, 1);
  z-index: 10;
  text-shadow: 0 0 1px grey;
  @media (min-width: 600px) {
    height: 5vh;
  }
`;

export const FooterMailToStyled = styled.a`
  cursor: pointer;
  color: rgba(54, 215, 183, 1);
`;

export const FooterSocialIconsContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media (min-width: 450px) {
    flex-direction: row;
  }
`;

export const FooterSocialIconStyled = styled.img`
  margin: 5px;
  height: 30px;
  cursor: pointer;
  @media (min-width: 600px) {
    margin: 10px;

  }
`;
