import styled from 'styled-components';

export const StyledCartContent = styled.div`
  height: 100%;
  width: 95%;
  margin: 0 auto;
  overflow: auto;
  padding: 5px;
  min-width: 300px;
  position: relative;
`;

export const StyledCartTitle = styled.h2`
  margin: 15px;
`;

export const StyledCartList = styled.ul`
  margin: 0 auto;
  width: 95%;
  list-style-type: none;
  overflow: auto;
  height: 60%;
  max-height: 350px;
`;

export const StyledCartDescription = styled.div`
  margin: 25px;
`;

export const StyledCartTotal = styled.div`
  margin: 25px;
  font-weight: bold;
`;

export const StyledCardControllers = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%)
`;
