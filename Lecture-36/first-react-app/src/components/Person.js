import React from 'react';

const Person = () => {
    const personName = "Max";
    const randomNumber = Math.floor(Math.random() * 100);

    const luckNumber = Math.floor(Math.random() * 10);
    
    let element = null;
    if (randomNumber % 2 === 0) {
        element = <p>This is a even number : { randomNumber}</p>
    } else {
        element = <strong>This is a odd number : { randomNumber}</strong>
    }

    const todos = [
        {
            id: 1,
            task:'Buy Fruits'
        },
        {
            id: 2,
            task:'Go to Gym'
        },
        {
            id: 3,
            task:'Buy Groceries'
        },
        {
            id: 4,
            task:'Watch Web Series'
        }
    ]

    return (
        <div>
            <h2>Lucky Number is : { luckNumber }</h2>
            {luckNumber===7 && <img src="https://media0.giphy.com/media/2sXf9PbHcEdE1x059I/200.gif?cid=82a1493bg19ocan9h3w9vnr71e5vmogol1z5njdlzxdxasge&ep=v1_gifs_search&rid=200.gif&ct=g"/>}
            <h1>My Fav Random Number : {randomNumber}</h1>
            <h2>My Name is : {personName}</h2>
            {randomNumber % 2 === 0 ? <h3>Even</h3> : <h3>Odd Number</h3>}
            {element}
            <ul>
                {
                    todos.map((todo) => {
                        return <li>{ todo.task }</li>
                   })
                }
            </ul>
        </div>
    )
}

export default Person;