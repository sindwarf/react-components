const App = () => {
  return (
  <div>
    <h2>My ToDoList</h2>
    <TodoList todos = {['get better', 'get smarter', 'do more']}/>
  </div>
  );
}

const {useState} = React;//AKA const useState = React.useState;


const TodoListItem = (props) => {
  //<li>{props.todo}</li>
  const [isDone, setIsDone] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const style = {
    textDecoration: isDone ? 'line-through'  :  'none',
    fontWeight: isHover ? 'bold'  :  'normal'
  };

  return (<li style = {style} onClick ={() => setIsDone(!isDone)} onMouseOver ={() => setIsHover(true)}
  onMouseLeave = {() => setIsHover(false)} >{props.todo}</li>)
};

// Now, update our `TodoList` to use the new `TodoListItem` component
const TodoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </ul>
);




ReactDOM.render(<App />, document.getElementById("app"));

