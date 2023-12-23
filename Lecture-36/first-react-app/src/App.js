import './App.css';
import Product from './components/Product';
import Person from './components/Person';

function App() {
  return (
    <section>
      {/* <Person/> */}
      <Product name="Nike Shoes" price={10} />
      <Product name="Reebok Shoes" price={20}/>
      <Product name="Adidas Shoes" price={30}/>
      <Product name="Sketchers Shoes" price={40}/>
      <Product name="Puma Shoes" price={50}/>
      <Product name="Redtape Shoes" price={60}/>
    </section>
  );
}

export default App;
