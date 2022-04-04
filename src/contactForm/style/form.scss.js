import styled from 'styled-components';

export const FormStyled = styled.form`
    position: relative;
    min-width: 340px;
    width: 90%;
    max-width: 700px;
    margin: 10px auto;
    padding: 5% 0;
`;

export const FormInputsContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const FormInputsBlockStyled = styled.div`
    min-width: 320px;
    width: 50%;
    padding: 10px;
`;

export const FormInputStyled = styled.input`
    min-width: 300px;
    width: 100%;
    padding: 10px;
    margin: 10px 5px;
    border: ${props => props.invalid ? '1px solid red' : '1px solid black'} ;
    border-radius: 5px;
    height: 30px;
    box-shadow:  ${props => props.invalid ? '2px 3px 5px red' : '2px 3px 5px black'};
    outline: none;
    transition: all .1s ease-in-out;
    :hover{
        box-shadow:  ${props => props.invalid ? '0 0 5px red' : ' 0 0 5px black'};
    }
    :focus{
        box-shadow:  ${props => props.invalid ? '0 0 5px red' : ' 0 0 5px black'};
    }
`;

export const FormTextareaStyled = styled.textarea`
    min-width: 300px;
    width: 100%;
    padding: 10px;
    margin: 10px 5px;
    border: ${props => props.invalid ? '1px solid red' : '1px solid black'} ;
    border-radius: 5px;
    height: 130px;  
    box-shadow:  ${props => props.invalid ? '2px 3px 5px red' : '2px 3px 5px black'};
    outline: none;
    transition: all .1s ease-in-out;
    :hover{
        box-shadow:  ${props => props.invalid ? '0 0 5px red' : ' 0 0 5px black'};
    } 
    :focus{
        box-shadow:  ${props => props.invalid ? '0 0 5px red' : ' 0 0 5px black'};
    }
`;

export const FormButtonStyled = styled.button`
    width: 100px;
    margin: 10px auto;
    padding: 8px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 2px 3px 5px black;
    transition: all .1s ease-in-out;
    outline: none;
    :hover{
        box-shadow: 1px 1px 5px black;
    }
    :focus{
        box-shadow: inset 0px 0px 8px black;
    }
    :disabled{
        box-shadow: 2px 3px 5px gray;
        cursor: not-allowed;
        border: 1px solid gray;
    }
`;