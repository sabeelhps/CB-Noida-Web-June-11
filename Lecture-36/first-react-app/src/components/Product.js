import { useState } from "react";
import "./Product.css";

function Product(props) {
    const [productName, setProductName] = useState(props.name);
    function productClickHandler() {
        console.log('You clicked on the product!');
        setProductName('Anonymous');
    }

    return (
        <figure onClick={productClickHandler} className="Product">
            <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww" alt="shoe"/>
            <figcaption>
                <h2>{ productName }</h2>
                <h2>Price : $ { props.price}</h2>
                <button>Buy Now</button>
            </figcaption>
        </figure>)
}

export default Product;