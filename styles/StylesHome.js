import styled from "styled-components";



export const Banner = styled.div`
/* background-color: #82A0C4; */
display:flex;
flex-direction: row;
width: 100%;
height: 100vh;
margin: 0;
padding: 0;

.shape {
    margin-left: -900px;
    /* transform: rotate(28deg); */
    margin-top: -509px;
}
.logo {
    display: flex;
    z-index: 10;
    padding: 20px;
}

.back {
    display: flex;
    background-image: url("../assets/shape.png");
    width: 40%;
}
.text {
    display: flex;
    width: 50%;
    flex-direction: column;
    padding: 60px 100px 100px 140px;
    align-self: center;

h1 {
    color: #82A0C4;
    font-family: 'Roboto';
    display: flex;
    flex-direction: column;

span {
    font-weight: 100;
}
    
}
p {
    color: #9B9B9A;
    font-family: 'Roboto';
}
}

`
export const Curse = styled.div`
background-color: #D8D8D8;
margin: auto;
display: flex;
flex-direction: column;
padding-bottom: 40px;
padding-top: 100px;
`