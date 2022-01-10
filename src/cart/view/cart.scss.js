import styled from 'styled-components';

export const StyledCartContent = styled.div`
  height: 100%;
  width: 95%;
  margin: 0 auto;
  padding: 5px;
  min-width: 300px;
  position: relative;
`;

export const StyledCartTitle = styled.h2`
  margin: 15px;
`;

export const StyledCartList = styled.ul`
  position: relative;
  top: 0px;
  margin: 0 auto;
  width: 95%;
  list-style-type: none;
`;

export const StyledCartDescription = styled.div`
  margin: 25px;
`;

export const StyledCartTotal = styled.div`
  margin: 25px;
  font-weight: bold;
`;

export const StyledCardControllers = styled.div`
  position: relative;
  bottom: 10px;
  left: 50%;
  width: 95%;
  transform: translateX(-50%);
`;
