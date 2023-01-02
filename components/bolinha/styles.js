import styled from "styled-components";

export const Container = styled.div`
  .todo {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }

    .invitadosContainer {
      width: 60%;
      min-width: min-content;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    .mediacionContainer {
      width: 260px;

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
  .imagem {
    display: flex;
    flex-direction: column;
    backgroud-repeat: no-repeat;
    width: 100%;
    align-items: center;
    margin: 32px 0;
    img{
      width: 200px;
      height: 200px;
      border-radius: 50%;

      @media (max-width: 910px) {
        width: 140px;
        height: 140px;
      }
      @media (max-width: 520px) {
        width: 300px;
        height: 300px;
      }
    }
  .texto{
    margin-top: 10px;
    font-family: 'Roboto';
    text-align: center;
    font-size: 14px;
    color: #fff;
    @media (max-width: 910px) {
      font-size: 12px;
    }
  }
}
`