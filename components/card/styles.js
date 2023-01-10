import styled from "styled-components";

export const Container = styled.button`
	background-color: ${(props) => props.theme.colors[props.background]};
	filter: ${(props) => props.disabled && 'opacity(0.5)'};
	height: 160px;
	width: 900px;
	border-radius: 92px;
	display:flex;
	align-items: center;
	align-self: center;
	margin: 30px 0px;
	padding: 0px 80px;
	border: none;
	cursor: ${(props) => !props.disabled && 'pointer'};;
	transition: filter 0.3s;

	@media (max-width: 910px) {
		width: 90%;
		height: auto;
		padding: 32px 80px;
		border-radius: 180px;
		margin: 0 32px;
	}

	@media (max-width: 768px) {
		border-radius: 64px;
	}

	@media (max-width: 640px) {
		flex-direction: column;
		gap: 32px;
	}


	@media (max-width:450px) {
	display: flex;
	flex-direction: column;

	p, h2 {
		text-align: center;
	}
	p {
		font-size: 15px;
	}
}
	
	:hover {
		filter: ${(props) => !props.disabled && 'brightness(1.2)'};
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
		font-family: 'Roboto-Bold';
	}
	h2 { 
		font-size: 30px;
		font-weight: 500;
		color: #ffff;
	}

	p {
		font-size: 20px;
		font-weight: 300;
		color: #ffff;
		margin-top: 8px;
	}

`
