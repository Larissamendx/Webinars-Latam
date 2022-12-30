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
      border-left-color: ${(props) => (props.background === 'blue' ? '#2B4A79' : props.background === 'gray' ? '#82A0C4' : props.background === 'red' ? '#BF0D0D' : props.background === 'green' ? '#008E88' : props.background === 'orange' ? '#ED7203' : '#7F337F')};
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
}


.date {
    color: grey;
    font-size: 25px;
    font-family: 'Roboto';
    font-weight: 800;

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
.date2 {
      color: grey;
      font-size: 25px;
      font-family: 'Roboto';
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
.date3 {
      color: grey;
      font-size: 25px;
      font-family: 'Roboto';
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
    font-size: 50px;
    font-family: 'Roboto';
    color: #2B4A79;
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
