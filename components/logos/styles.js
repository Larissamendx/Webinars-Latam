import styled from "styled-components";

export const Container = styled.div`
	gap: 50px;
	display: flex;
  width: 200px;
    /* opacity : 0.5; */

	img {
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