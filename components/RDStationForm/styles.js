import styled from 'styled-components'

export const Container = styled.div`
  background: #1F3960;
  padding: 80px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  .rd-section {
    background: #e9e9e9 !important;
    border-radius: 2rem !important;
  }

  .bricks-form__field {
    margin-bottom: 1rem !important;
  }

  .bricks-form__field > .bricks-form__field__option > label {
    display: flex !important;
    gap: 0.5rem;
  }
`;