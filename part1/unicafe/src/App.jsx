const Header = (propos) => {
  return <p>{propos.name}</p>;
};

const Part = (props) => {
  return (
    <>
      part: {props.part} and exercises: {props.exercises}
    </>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0]} exercises={props.exercises[0]} />
      <br />
      <Part part={props.part[1]} exercises={props.exercises[1]} />
      <br />
      <Part part={props.part[2]} exercises={props.exercises[2]} />
    </div>
  );
};
const Total = ({ numbers }) => {
  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
    total += numbers[index];
  }
  return <p>Total exercises: {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10 
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  

  return (
    <div>
      <Header name={course} />
      <Content
        part={[part1.name, part2.name, part3.name]}
        exercises={[part1.exercises, part2.exercises, part3.exercises]}
      />
      <Total numbers={[part1.exercises, part2.exercises, part3.exercises]} />
    </div>
  );
};

export default App;