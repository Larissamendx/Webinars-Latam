import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => (props.background === 'blue' ? '#2B4A79' : props.background === 'gray' ? '#82A0C4' : props.background === 'red' ? '#BF0D0D' : props.background === 'green' ? '#008E88' : props.background === 'orange' ? '#ED7203' : '#7F337F')};
    width: 900px;
    border: 1px solid #2B4A79;
    border-radius: 92px;
    display:flex;
    justify-content: space-evenly;

.date {
    color: #ffff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 800;
    font-family: 'Roboto';
    }
h2 { 
    font-size: 30px;
    font-weight: 500;
    font-family: 'Roboto';
    color: #ffff;
    margin-top: 21px;
}

p {
    font-size: 20px;
    font-weight: 300;
    font-family: 'Roboto';
    color: #ffff;
    margin-top: -27px;
    padding-bottom: 13px;
}
`
