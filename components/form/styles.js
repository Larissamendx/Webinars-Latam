import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) =>
    props.color === "blue"
      ? "#1F3960"
      : props.color === "red"
      ? "#991010"
      : props.color === "cyan"
      ? "#08706b"
      : props.color === "yellow"
      ? "#c46009"
      : props.color === "purple"
      ? "#5e2f5e"
      : "#1F3960"};
  padding: 80px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

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
    background: #e9e9e9;
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
    label {
      display: flex;
      gap: 8px;
      flex-direction: column;
      span {
        font-size: 18px;
        font-weight: 600;
        color: ${(props) => props.theme.colors[props.color]};
        margin-top: 3px;
        padding-bottom: 10px;
      }
      .input {
        display: flex;
        font-size: 18px;

        select {
          flex: 1;
          color: ${(props) => props.theme.colors[props.color]};
          height: 57px;
          background-color: #e9e9e9;
          border: 2px solid #9ba8c4;
          font-size: 16px;
          padding: 5px;
          border-radius: 16px;
          outline: none;

          :hover, :focus {
            border-color: #78849e;
          }
          option {
            background-color: #e9e9e9;
            border: 1px solid #9ba8c4;
            font-size: 19px;
            width: 130px;
            height: 30px;
            border-radius: 16px;
            @media(max-width: 610px) {
              font-size: 10px;
              /* width: 130px; */
              height: 40px;
              margin-left: -10px;
            }
          }

          @media(max-width: 610px) {
            font-size: 10px;
            width: 230px;
            height: 40px;
          }
        }
        span {
          padding-left: 10px;
          color: ${(props) => props.theme.colors[props.color]};
        }
      }
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
    font-family: "Roboto-Thin";

    label {
      display: flex;
      gap: 8px;
    }
  }
  .button {
    background: ${(props) => props.theme.colors[props.buttonColor]};
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
      border: 2px solid #9ba8c4;
      padding: 16px;
      border-radius: 16px;
      font-size: 18px;
      outline: none;
      color: ${(props) => props.theme.colors[props.color]};

      :hover,
      :focus {
        border-color: #78849e;
      }

      ::placeholder {
        color: #9ba8c4;
        font-size: 18px;
      }
    }
  }
`;
