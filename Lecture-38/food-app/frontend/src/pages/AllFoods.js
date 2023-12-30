import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import { fetchFoods } from '../lib/apis';
import FoodList from '../components/FoodList/FoodList';

const AllFoods = () => {

    const [foods, setFoods] = useState([]);
    
    useEffect(() => {
        (async () => {
            const data = await fetchFoods(); 
            setFoods(() => data);
        })()
    }, []);

    return (
        <section>
            <Banner />
            <FoodList foods={foods} />
      </section>
    )
}

export default AllFoods;