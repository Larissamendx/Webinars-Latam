import {Container} from './styles';

export default function Bola(props) {
  return (
    <Container>
    <div>
      <h2>{props.Title}</h2>
    </div>
    <div className='date'>{props.date}</div>
    <div className='date2'>{props.date2}</div>
    <div className='date3'>{props.date3}</div>
    </Container>
  );
}