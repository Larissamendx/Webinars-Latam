import styled from "styled-components";

export const Banner = styled.div`
  /* background-color: #82A0C4; */
  display: flex;
  position: relative;
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

  .logoblue {
    width: 132px;
    display: none;

    @media (max-width: 910px) {
      position: absolute;
      left: 30px;
      top: 30px;
      display: block;
    }
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
      text-align: center;
      margin-top: 30px;
    }

    @media (max-width: 768px) {
      padding: 10px 20px;
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

  @media(max-width: 610px) {
    padding: 30px;
  }

  h2 {
    color: #ffff;
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    padding-bottom: 24px;
    span {
      font-weight: 100;
    }
    @media(max-width: 610px) {
      font-size: 25px;
    }
  }
  p {
    color: #ffff;
    font-size: 1.2rem;

    @media(max-width: 610px) {
      font-size: 10px;
    }
  }

`;
export const Alianzas = styled.div`
  background: #D8D8D8;
  padding: 80px;

  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: 3rem;
    padding-bottom: 24px;
    span {
      font-weight: 100;
    }
  }

  p {
    font-size: 1.2rem;
    padding-bottom: 132px;
    color: #353535;

    @media (max-width: 410px) {
    padding-bottom: 30px;
    }
  }
  @media (max-width: 410px) {
      text-align: center;
      padding: 10px 20px;
      margin-top: 30px;
    }
`

export const Logos = styled.div`
	gap: 50px;
	display: flex;
  flex-wrap: wrap;
	justify-content: center;

  @media(max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }

	img {
    filter: saturate(0);
		width: auto;
    height: 100px;
    transition: filter 0.3s;

    :hover {
      filter: saturate(1);
    }
	}
`
