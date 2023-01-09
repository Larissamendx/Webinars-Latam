import styled from "styled-components";

export const Banner = styled.div`
  background-color: ${(props) => props.theme.colors[props.color]};
  height: 350px;
  padding-top: 50px;
  font-family: 'Roboto-Regular';
  @media (max-width: 910px) {
    height: 250px;
  }
  @media (max-width: 610px) {
    height: 200px;
  }
  @media (max-width: 520px) {
    height: 150px;
  } 
`
export const Container = styled.div`
  .teste{
    padding-top: 450px;
    padding-bottom: 132px;
    @media (max-width: 910px) {
      padding-top: 230px;
    }
    @media (max-width: 610px) {
      padding-top: 200px;
    }
    @media (max-width: 520px) {
      padding-top: 150px;
    }
  }
  .registrese {
    text-align: center;
    margin-top: 100px;
  }
  .footer{
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors[props.color]};
    padding: 50px;

    @media (max-width: 610px) {
      margin-top: 50px;
    }

    p{
      font-size: 20px;
      color: #fff;
      @media (max-width: 610px) {
        font-size: 15px;
      }
      @media (max-width: 410px) {
        font-size: 10px;
      }
    }
    .linha{
      background-color: #fff;
      border-radius: 50px;
      height: 30px;
      font-size: 18px;
      display: flex;
      align-items: center;
      padding-left: 20px;
      color: ${(props) => props.theme.colors[props.color]};
    }
    .linha2{
      background-color: #fff;
      border-radius: 50px;
      height: 30px;
      font-size: 18px;
      display: flex;
      padding-left: 20px;
      align-items: center;
      color: ${(props) => props.theme.colors[props.color]};
    }
  }
  .imagemContainer{
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    @media (max-width: 520px) {
      flex-direction: column;
    }
  }
`

export const Parceiros = styled.div`
  background: #D8D8D8;
  padding: 80px;

  @media (max-width: 420px) {
     padding: 20px;
    }

  h2 {
    color: ${(props) => props.theme.colors[props.color]};
    font-size: 3rem;
    padding-bottom: 24px;
    span {
      font-weight: 100;
    }
  }

  h3 {
    color: ${(props) => props.theme.colors[props.color]};
  }

  p {
    font-size: 1.2rem;
    color: #353535;
  }
`

export const Logos = styled.div`
	gap: 50px;
	display: flex;
	justify-content: center;

	img {
		height: 100px;
    width: auto;
    transition: filter 0.3s;

    :hover {
      filter: brightness(1.3);
    }
		@media (max-width: 910px) {
			width: 150px;
		}
		@media (max-width: 610px) {
			width: 100px;
			height: 100px;
		}
		@media (max-width: 410px) {
			width: 50px;
			height: 50px;
		}
	}
`