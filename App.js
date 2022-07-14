import './App.css';
import { TreesContext } from "./";
import { useContext } from 'react';
// 
function App() {
  const { trees } = useContext(TreesContext);
  return (
    <div>
      <h1>Trees I've heard of</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
