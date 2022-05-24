import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

/*
Tutos utilisés :
To-Do App : https://www.youtube.com/watch?v=E1E08i2UJGI 
Fenêtre modale : 
*/

function App() {
  return (
    <div className="todo-app">
      <TodoList/> 
    </div>
  );
};

export default App;
