import styled from "styled-components";

export const Container = styled.div`
  background-color: #Fff;
  width: 600px;
  height: 600px;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 910px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 610px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 520px) {
    width: 200px;
    height: 200px;
  }

  :after {
    content: "";
    position: absolute;
    width: 595px;
    height: 595px;
    border-radius: 100%;
    border: 10px solid black;
    border-top-color: white;
    border-right-color: white;
    border-bottom-color: lightgrey;
    border-left-color: ${(props) => props.theme.colors[props.color]};
    transform: rotate(-45deg);

    @media (max-width: 910px) {
      width: 400px;
      height: 400px;
    }
    @media (max-width: 610px) {
      width: 300px;
      height: 300px;
    }
    @media (max-width: 520px) {
      width: 200px;
      height: 200px;
    }
  }
  .date {
    color: grey;
    font-size: 25px;
    font-weight: 800;
    margin-bottom: 16px;

    @media (max-width: 910px) {
      font-size: 15px;
    }
    @media (max-width: 610px) {
      font-size: 10px;
    }
    @media (max-width: 520px) {
      font-size: 7px;
    }
  }
  .time {
    color: grey;
    font-size: 25px;
    @media (max-width: 910px) {
      font-size: 15px;
    }
    @media (max-width: 610px) {
      font-size: 10px;
    }
    @media (max-width: 520px) {
      font-size: 7px;
    }
  }
  h2 { 
    font-size: 40px;
    color: ${(props) => props.theme.colors[props.color]};
    padding: 0px 45px 30px 45px;
    text-align: center;
    @media (max-width: 910px) {
      font-size: 25px;
    }
    @media (max-width: 610px) {
      font-size: 18px;
    }
    @media (max-width: 520px) {
      font-size: 10px;
    }
  }
`
