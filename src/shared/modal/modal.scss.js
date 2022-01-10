import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  background-color: whitesmoke;
  z-index: ${(props) => props.zIndex + 10 || 100};
  border-radius: 5px;
  overflow: hidden;
  min-width: 300px;
  width: 90%;
  max-width: 500px;
  box-shadow: 5px 5px 10px;
  visibility: hidden;
`;

export const StyledModalSticky = styled(StyledModal)`
  left: 0;
  transform: translate(0, -50%);
  overflow: auto;
  height: 100%;
`;

export const StyledModalHeader = styled.div`
  padding: 25px;
  background: rgba(54, 215, 183, 1);
  border-bottom: 1px solid black;
`;

export const StyledModalChildren = styled.div`
  padding: ${(props) => (props.padding ? props.padding : '25px')};
`;

export const StyledModalDefaultButton = styled.button`
  margin-bottom: 25px;
  padding: 5px;
`;

export const StyledModalFooter = styled.div`
  padding: 8px;
  border-top: 2px solid black;
  box-sizing: border-box;
  background: white;
  color: rgba(64, 215, 183, 1);
`;
