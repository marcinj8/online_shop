import styled from "styled-components";

export const NavigationItemStyled = styled.li`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 0 2px black;
  font-weight: bold;
  cursor: pointer;
  & a {
    color: white;
    text-shadow: 0 0 2px black;
  }
  & a:visited {
    color: white;
    text-shadow: 0 0 2px black;
  }
  :hover {
    background: wheat;
    text-decoration: underline;
  }
  @media (min-width: 800px) {
    width: 130px;
    height: 100%;
    margin: 0;
  }
`;
