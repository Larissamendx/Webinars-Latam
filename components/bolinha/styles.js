import styled from "styled-components";

export const Container = styled.div`
  .todo {
    display: flex;
    width: 100%;
  }
  .imagem{
    display: flex;
    flex-direction: column;
    padding: 50px;
    backgroud-repeat: no-repeat;
    width: 100%;
    align-items: center;
    :nth-child(-n + 3){
      width: 10%; 
    }
    :nth-child(4){
      width: 80%;
    }
    img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .texto{
      margin-top: 10px;
      font-family: 'Roboto';
      text-align: center;
      font-size: 14px;
      color: #fff;
    }
`