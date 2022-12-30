import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => (props.background === 'blue' ? '#2B4A79' : props.background === 'gray' ? '#82A0C4' : props.background === 'red' ? '#BF0D0D' : props.background === 'green' ? '#008E88' : props.background === 'orange' ? '#ED7203' : '#7F337F')};
    width: 900px;
    border: 1px solid #2B4A79;
    border-radius: 92px;
    display:flex;
    justify-content: space-evenly;
    align-self: center;
    margin: 30px 0px;
    margin: 0 auto;

    @media (max-width: 910px) {
        width: 600px;
    }
    @media (max-width: 610px) {
        width: 400px;
        margin-top: -60px;
    }
    @media (max-width: 410px) {
        width: 350px;
    }

h2 { 
    font-size: 35px;
    font-weight: 500;
    font-family: 'Roboto';
    color: #ffff;
    margin-top: 21px;
    text-transform: uppercase;
    @media (max-width: 910px) {
        font-size: 25px;
    }
    @media (max-width: 610px) {
        font-size: 18px;
    }
    @media (max-width: 410px) {
        font-size: 12px;
    }
}


`
