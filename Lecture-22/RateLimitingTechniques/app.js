const inp = document.querySelector('input');

function fetchData(searchWord) {
    console.log('fetching date...');
}

function debounce(func, delay) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            func(...args)
        }, delay);
    }
}

function throttle(func, delay) {
    let startTime = 0;
    return function (...args) {
        const currTime = new Date().getTime();
        if (currTime - startTime > delay) {
            func(...args);
            startTime = currTime;
        }
    }
}

const fetchDataWithDebounce = debounce(fetchData, 800);
const fetchDataWithThrottle = throttle(fetchData, 200);

inp.addEventListener('keyup', function (event) {
    const searchWord = inp.value;
    // fetchDataWithDebounce(searchWord);
    fetchDataWithThrottle(searchWord);
});