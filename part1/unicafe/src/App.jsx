const Header = (course) => {
  return <p>{course.name}</p>;
};

const Content = (lesson) => {
  return (
    <p>
      part: {lesson.part} and exercises: {lesson.exercises}
    </p>
  );
};

const Total = ({number}) => {
  console.log(number);
  let total = 0
  for (let index = 0; index < number.length; index++) {
    total += number[index];
  }
  return(
    <p>
      Total exercises: {total}
    </p>
  )
}

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header name={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total number={[exercises1,exercises2,exercises3]}/>
    </div>
  );
};

export default App;
