import styled from "styled-components";

export const Container = styled.button`
	background-color: ${(props) => props.theme.colors[props.background]};
	height: 160px;
	width: 900px;
	border-radius: 92px;
	display:flex;
	align-items: center;
	align-self: center;
	margin: 30px 0px;
	padding: 0px 80px;
	border: none;
	cursor: pointer;
	transition: filter 0.3s;

	@media (max-width: 910px) {
		width: 90%;
		height: auto;
		padding: 32px 80px;
		border-radius: 180px;
		margin: 0 32px;
	}
	
	:hover {
		filter: brightness(1.2);
	}

	.text {
		flex: 1;
		text-align: start;
	}

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
	}

	p {
		font-size: 20px;
		font-weight: 300;
		font-family: 'Roboto';
		color: #ffff;
	}
`
