import {Container} from './styles';

export default function Bola(props) {
  return (
    <Container color={props.color}>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div className='date'>{props.date}</div>
      {
        props.time.map((time, id) => <p key={id} className='time'>{time}</p>)
      }
    </Container>
  );
}