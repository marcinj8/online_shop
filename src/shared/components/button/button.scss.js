import styled from 'styled-components';

export const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : 'auto')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  position: ${(props) => (props.position ? props.position : 'static')};
  top: ${(props) => (props.top ? props.top : 'none')};
  bottom: ${(props) => (props.bottom ? props.bottom : 'none')};
  right: ${(props) => (props.right ? props.right : 'none')};
  left: ${(props) => (props.left ? props.left : 'none')};
  transform: ${(props) => (props.transform ? props.transform : 'none')};
  padding: 5px;
  background: ${(props) =>
    props.background ? props.background : 'transparent'};
  color: ${(props) => (props.color ? props.color : 'auto')};
  cursor: pointer;
  text-shadow: ${(props) => (props.textShadow ? props.textShadow : 'none')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  &:disabled {
    cursor: not-allowed;
    color: gray;
    box-shadow: 1px 1px 2px gray;
    background: silver;
  }
  &:enabled {
    animation: ${(props) =>
      props.showEnableAnimation ? `enableButton .5s` : 'none'};
  }

  @keyframes enableButton {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.4);
    }
    50% {
      transform: scale(1);
    }
    65% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  } ;
`;

export const StyledPrimaryButton = styled(StyledButton)`
  padding: 10px;
  background: ${(props) => (props.background ? props.background : 'white')};
  border: 1px solid black;
  border-radius: 5px;
  margin: ${(props) => (props.margin ? props.margin : '5px')};
  outline: none;
  box-shadow: 1px 1px 5px black;
`;

export const StyledInlineButton = styled(StyledButton)`
  padding: 10px;
  background: transparent;
  border: none;
  text-decoration: underline;
  outline: none;
  &:disabled {
    cursor: not-allowed;
    color: gray;
    box-shadow: none;
    background: transparent;
  }
`;

export const StyledIconButton = styled(StyledButton)`
  background: transparent;
  border: none;
  outline: none;
  height: 80px;
`;

export const StyledButtonImg = styled.img`
  width: ${(props) => (props.width ? props.width : '80%')};
  height: ${(props) => (props.width ? props.width : '80%')};
  object-fit: contain;
  background: ${(props) =>
    props.background ? props.background : 'transparent'};
`;
