import styled from "styled-components";

export const Container = styled.div`
  .todo {
    display: flex;
    @media (max-width: 520px) {
      display: flex;
      flex-direction: column;
    }
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
    @media (max-width: 910px) {
      padding: 30px;
    }
    @media (max-width: 520px) {
      padding: 20px;
      margin: 0 auto;
    }
    img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      @media (max-width: 520px) {
        width: 200px;
        height: 200px;
      }
    }
    .texto{
      margin-top: 10px;
      font-family: 'Roboto';
      text-align: center;
      font-size: 14px;
      color: #fff;
      width: 100px;
      @media (max-width: 910px) {
        font-size: 10px;
    }
    }
`