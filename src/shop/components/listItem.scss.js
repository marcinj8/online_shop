import styled from "styled-components";

export const ListItemStyled = styled.li`
  width: 250px;
  border: 1px solid black;
  padding: 5px;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 10px 5px 10px black;
  transition: all 0.2s ease;
  background-color: white;
  &:hover {
    box-shadow: 13px 8px 25px black;
    transform: scale(1.05);
  }
  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const ListItemHeaderStyled = styled.div`
  margin: 5px auto;
`;

export const ListItemDataStyled = styled.div`
  display: flex;
  justify-content: space-around;
  height: 130px;
  width: 80%;
  margin: 0 auto;
`;

export const ListItemImageStyled = styled.img`
  width: 100px;
  height: 100px;
  object-fit: scale-down;
`;

export const ListItemPurchaseDataStyled = styled.div`
  margin: 10px auto;
  & div {
    margin: 5px auto;
  }
`;
