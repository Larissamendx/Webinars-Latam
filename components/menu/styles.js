import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
`

export const Button = styled.button`
  position: absolute;
  background: transparent;
  cursor: pointer;
  right: 32px;
  top: 32px;
  z-index: 1;

  img {
    width: 40px;
    height: 40px;
  }
  
`

export const Panel = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 80px 0 32px;
  right: -360px;
  top: 0px;
  width: 360px;
  height: 100vh;
  background: ${props => props.theme.colors.blue};
  transition: transform 0.5s;
  box-shadow: -4px 0 10px rgba(0,0,0,0.15);

  transform: ${props => props.isOpen && 'TranslateX(-100%)'};

`

export const Item = styled.a`
  background: transparent;
  font-family: 'Roboto-Medium';
  color: white;
  font-size: 24px;
  text-align: start;
  /* text-transform: uppercase; */
  background: ${props => props.theme.colors.blue};
  padding: 12px 32px;
  cursor: pointer;
  transition: filter 0.3s;
  
  :hover {
    filter: brightness(1.2);
  }
`