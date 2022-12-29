import styled from "styled-components";

export const Banner = styled.div`
    background-color: #2B4A79;
    height: 300px;
    padding-top: 50px;
    
`
export const Container = styled.div`
    .teste{
      padding-top: 450px;
    }
    .registrese {
      text-align: center;
      margin-top: 100px;
    }
    .footer{
      display: flex;
      flex-direction: column;
      background-color: ${(props) => (props.background === 'blue' ? '#2B4A79' : props.background === 'gray' ? '#82A0C4' : props.background === 'red' ? '#BF0D0D' : props.background === 'green' ? '#008E88' : props.background === 'orange' ? '#ED7203' : '#7F337F')};
      margin-top: 150px;
      padding: 50px;

      p{
        font-family: 'Roboto';
        font-size: 20px;
        color: #fff;
      }

      .linhaTodo{
        display: flex;
        flex-direction: row ;
        margin-top: 20px;
        gap: 270px;
      }
      .linha{
        background-color: #fff;
        border-radius: 50px;
        width: 45%;
        height: 30px;
        font-family: 'Roboto';
        font-size: 18px;
        display: flex;
        align-items: center;
        padding-left: 20px;
        color: ${(props) => (props.background === 'blue' ? '#2B4A79' : props.background === 'gray' ? '#82A0C4' : props.background === 'red' ? '#BF0D0D' : props.background === 'green' ? '#008E88' : props.background === 'orange' ? '#ED7203' : '#7F337F')};
      }
      .linha2{
        background-color: #fff;
        border-radius: 50px;
        width: 11%;
        height: 30px;
        font-family: 'Roboto';
        font-size: 18px;
        display: flex;
        align-items: center;
        padding-left: 20px;
        color: ${(props) => (props.background === 'blue' ? '#2B4A79' : props.background === 'gray' ? '#82A0C4' : props.background === 'red' ? '#BF0D0D' : props.background === 'green' ? '#008E88' : props.background === 'orange' ? '#ED7203' : '#7F337F')};
      }
    }
`