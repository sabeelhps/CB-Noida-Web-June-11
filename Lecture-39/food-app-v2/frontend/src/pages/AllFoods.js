import React, { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import { fetchFoods } from '../lib/apis';
import FoodList from '../components/FoodList/FoodList';
import useHttp from '../hooks/use-http';

const AllFoods = () => {

    const { data: foods, status, error, sendRequest } = useHttp(fetchFoods);
    
    useEffect(() => {
        sendRequest();
    }, []);

    if (error && status === 'completed') {
        return <p>{ error }</p>
    }

    if (!error && status === 'pending') {
        return <p> Loading...... </p>
    }

    return (
        <section>
            <Banner />
            {foods && <FoodList foods={foods} />}
      </section>
    )
}

export default AllFoods;