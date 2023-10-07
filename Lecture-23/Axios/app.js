// axios.get('https://fakestoreapi.com/products/1')
//     .then((res) => {
//         console.log(res);
//         console.log(res.data.title);
//     });


async function getData() {
    const res = await axios.get('https://fakestoreapi.com/products/1');
    console.log(res.data.price);
}

getData();