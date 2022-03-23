// import logo from './logo.svg';
import './App.css';
// Components
import Card from "./components/Card";

function App() {
  // State
  const todos = [
    {
      id: 1,
      title: "Membuat Komponen",
      completed: 'true',
    },
    {
      id: 2,
      title: "Unit Testing",
      completed: false,
    },
    {
      id: 3,
      title: "Setup Development Environment",
      completed: true,
    },
    {
      id: 4,
      title: "Deploy ke server",
      completed: false,
    },
    {
      id: 5,
      title: "Deploy ke Cloud",
      completed: true,
    },
  ];


  return (
    <div className='container'>
      <nav className='nav'>
        <h1>
          Todo List
        </h1>
      </nav>
      {
        todos.map((todo, todoIdx) => {
          return (
            <Card title={todo.title} isCompleted={todo.completed} key={todoIdx} />
          )
        })
      }
    </div>
  );
}

export default App;
