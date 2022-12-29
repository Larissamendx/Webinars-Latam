import {Container} from './styles';

export default function Card(props) {
  return (
    <Container background={'blue' || 'gray'}>
    <div>
      <h2>{props.Title}</h2>
      <p>{props.text}</p>
    </div>
    <div className='date'>{props.date}</div>
    </Container>
  );
}
