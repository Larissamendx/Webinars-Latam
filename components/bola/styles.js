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
      
  }

}


.date {
    color: grey;
    font-size: 25px;
    font-family: 'Roboto';
    font-weight: 800;
    
    }
.date2 {
      color: grey;
      font-size: 25px;
      font-family: 'Roboto';
}
.date3 {
      color: grey;
      font-size: 25px;
      font-family: 'Roboto';
}
h2 { 
    font-size: 50px;
    font-family: 'Roboto';
    color: #2B4A79;
    padding: 0px 45px 30px 45px;
    text-align: center;
}
`
