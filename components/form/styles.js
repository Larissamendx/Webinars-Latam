import styled from "styled-components";

export const Container = styled.div`

  background: ${
    props =>  
      props.color === 'blue' ? '#1F3960' : 
      props.color === 'red' ? '#991010' :
      props.color === 'cyan' ? '#08706b' :
      props.color === 'yellow' ? '#c46009' :
      props.color === 'purple' ? '#5e2f5e' :
      '#1F3960'
  };
  padding: 80px;
  font-family: 'Roboto';

  @media (max-width: 768px) {
      padding: 16px;
    }
`

export const Form = styled.form`

  border-radius: 32px;
  overflow: hidden;

  h2 {
    color: ${(props) => props.theme.colors[props.color]};
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 32px;
  }

  .content {
    background: #E9E9E9;
    padding: 40px 40px 100px;
  }
  .input-container {
    display: grid;
    gap: 32px 16px;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
  .form-footer {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 14px;
    position: relative;
    background: ${(props) => props.theme.colors[props.color]};
    color: white;
    padding: 80px 40px 40px;
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      gap: 8px;
    }
  }
  .button {
    background: ${props => props.theme.colors[props.buttonColor]};
    font-size: 24px;
    font-weight: 600;
    color: white;
    width: 280px;
    height: 90px;
    border: none;
    border-radius: 12px;
    position: absolute;
    transform: translateY(-50%);
    cursor: pointer;
    top: 0;
    right: 40px;
    transition: filter 0.2s;

    :hover {
      filter: brightness(1.2);
    }

    @media (max-width: 768px) {
      width: 80%;
      right: 50%;
      transform: translate(50%, -50%);
    }
  }

  .text-input {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.colors[props.color]};
    gap: 4px;

    input {
      background: transparent;
      border: 2px solid #9BA8C4;
      padding: 16px;
      border-radius: 16px;
      font-size: 18px;
      outline: none;
      color: ${(props) => props.theme.colors[props.color]};

      :hover, :focus {
        border-color: #78849E;
      }

      ::placeholder {
        color: #9BA8C4;
        font-size: 18px;
      }
    }
  }
`