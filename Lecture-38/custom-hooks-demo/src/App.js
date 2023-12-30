import { useEffect } from 'react';
import './App.css';
import Person from './components/Person';
import useToggle from './hooks/use-Toggle';

function App() {

  const [isHappy, setIsHappy] = useToggle(true);

  useEffect(() => {
    (async()=>{
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (res.status !== 200) {
          throw new Error('cannot fetch');
        }
        const data = await res.json();
        console.log(data);
      }
      catch (e) {
        
      }
    })()
  },[])

  return (
    <div className="App">
      <h1 onClick={setIsHappy}>{isHappy ? '😄' : '😢'}</h1>
      <Person/>
    </div>
  );
}

export default App;
