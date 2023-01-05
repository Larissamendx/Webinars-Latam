import {Container} from './styles';
import CourseContext from '../../context/CourseContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';

export default function Card(props) {
  const {setCurrentCourse} = useContext(CourseContext);
  const router = useRouter();

  function handleClick() {
    if(!props.course.disabled) {
      setCurrentCourse(props.course);
      router.push('/sobre');
    }
  }

  return (
    <Container background={props.course.color} disabled={props.course.disabled} onClick={() => handleClick()}>
    <div className='text'>
      <h2>{props.course.title}</h2>
      {props.course.subtitle && <p>{props.course.subtitle}</p>}
    </div>
    <div className='date'>{props.course.date}</div>
    </Container>
  );
}
