import styled from 'styled-components';

export const NavigationStyled = styled.ul`
  position: fixed;
  top: 0;
  width: 100%;
  height: 8vh;
  box-sizing: border-box;
  list-style-type: none;
  display: none;
  justify-content: flex-end;
  box-shadow: 0 0 0 black;
  background: rgba(54, 215, 183, 0.2);
  border-bottom: 1px solid black;
  margin: 0;
  padding-right: 50px;
  z-index: 10;
  color: white;
  text-shadow: black;
  @media (min-width: 800px) {
    display: flex;
  }
`;

export const StyledCartNavContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 60px;
  max-height: '50px';
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    margin: 0;
  }
`;

export const StyledPurchasedItemNumber = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  color: white;
  background: red;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  font-weight: bold;
`;

export const SideBarStyled = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-100%);
  width: 60%;
  min-width: 250px;
  height: 100%;
  box-sizing: border-box;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 5px 0 10px black;
  background: rgba(54, 215, 183, 1);
  opacity: 0;
  margin: 0;
  z-index: 100;
  @media (min-width: 800px) {
    display: none;
  }
`;

export const StyledHeaderSideBar = styled.h2`
  margin: 8% auto;
`;

export const BurgerStyled = styled.button`
  position: fixed;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  :focus {
    outline: none;
  }
  div {
    width: 2rem;
    box-shadow: 0 0 3px black;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;
