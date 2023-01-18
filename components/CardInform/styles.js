import styled from "styled-components";

export const Container = styled.a`
	background-color: ${(props) => props.theme.colors[props.color]};
	width: 900px;
	height: 140px;
	border-radius: 92px;
	display:flex;
	align-items: center;
	justify-content: space-evenly;
	align-self: center;
	margin: 30px 0px;
	margin: 0 auto;
	cursor: pointer;
	transition: filter 0.3s;
	
	:hover {
		filter: brightness(1.2);
	}

	@media (max-width: 910px) {
		width: 600px;
	}
	@media (max-width: 610px) {
		width: 400px;
		margin-top: -60px;
	}
	@media (max-width: 420px) {
		width: 250px;
		height: 50px;
	}

	h2 { 
		font-size: 35px;
		font-weight: 500;
		color: #ffff;
		@media (max-width: 910px) {
			font-size: 25px;
		}
		@media (max-width: 610px) {
			font-size: 18px;
		}
		@media (max-width: 420px) {
			font-size: 12px;
		}
	}
`
