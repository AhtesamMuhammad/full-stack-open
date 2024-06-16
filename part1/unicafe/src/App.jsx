const Header = (course) => {
  return <p>{course.name}</p>;
};

const Part = (lesson) => {
  return (
    <>
      part: {lesson.part} and exercises: {lesson.exercises}
    </>
  );
};

const Content = (lessons) => {
  return (
    <div>
      <Part part={lessons.part[0]} exercises={lessons.exercises[0]} />
      <br />
      <Part part={lessons.part[1]} exercises={lessons.exercises[1]} />
      <br />
      <Part part={lessons.part[2]} exercises={lessons.exercises[2]} />
    </div>
  );
};
const Total = ({ number }) => {
  let total = 0;
  for (let index = 0; index < number.length; index++) {
    total += number[index];
  }
  return <p>Total exercises: {total}</p>;
};

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
      <Content
        part={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      />
      <Total number={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
