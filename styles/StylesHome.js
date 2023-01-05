import styled from "styled-components";

export const Banner = styled.div`
  /* background-color: #82A0C4; */
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  margin-bottom: 32px;
  font-family: "Roboto-Regular";

  .shape {
    margin-left: -900px;
    /* transform: rotate(28deg); */
    margin-top: -509px;
  }
  .logo {
    display: flex;
    z-index: 10;
    margin: 100px 0 0 120px;
  }

  .back {
    display: flex;
    background-image: url("../assets/shape.png");
    width: 40%;

    @media (max-width: 910px) {
      display: none;
    }
  }
  .text {
    display: flex;
    width: 50%;
    flex-direction: column;
    padding: 60px 100px 100px 140px;
    align-self: center;

    @media (max-width: 910px) {
      width: 100%;
    }

    h2 {
      margin-bottom: 16px;
    }

    h1,
    h2 {
      color: #82a0c4;
      display: flex;
      flex-direction: column;
      span {
        font-weight: 100;
      }
    }
    p {
      color: #9b9b9a;
    }
  }
`;
export const Course = styled.div`
  background-color: #d8d8d8;
  margin: auto;
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding-bottom: 40px;
  padding-top: 100px;
`;

export const Report = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 70px 100px;
  background-color: #2B4A79;
    border: 1px solid #2B4A79;
    border-radius: 28px;
	margin-top: 50px;
	margin-bottom: 50px;

  h2 {
    color: #ffff;
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    padding-bottom: 24px;
    span {
      font-weight: 100;
    }
  }
  p {
    color: #ffff;
    font-size: 1.2rem;
  }

`;
export const Alianzas = styled.div`
`
