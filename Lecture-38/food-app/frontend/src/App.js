import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import AllFoods from './pages/AllFoods';
import Cart from './pages/Cart';

// Homework - useReducer and useCallback 
// https://github.com/sabeelhps/CB-Noida-Web-Apr-3/blob/master/Lecture-44/food-app/frontend/src/hooks/use-http.js

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/foods' element={ <AllFoods/> } />
        <Route path='/cart' element={ <Cart/> } />
      </Routes>
    </Layout>
  );
}

export default App;
