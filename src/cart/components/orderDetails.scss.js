import styled from 'styled-components';

export const StyledAddressData = styled.div`
  /* height: ${(props) => (props.show ? 'auto' : '0px')}; */
  /* display: ${(props) => (props.show ? 'block' : 'none')}; */
  border-bottom: 1px solid black;
  height: 0;
  width: 0;
  margin: 0 auto;
  overflow: hidden;
`;

export const StyledOrderDetailsList = styled.ul`
  width: 40%;
  min-width: 280px;
  @media (min-width: 424px) {
    margin: 0 5%;
  }
`;
