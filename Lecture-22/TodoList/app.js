const list = document.querySelector('#list');
const addBtn = document.querySelector('#add-btn');
const todoInp = document.querySelector('#todo-inp');

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

let todos = [
    {
        id: uuidv4(),
        task: "Buy Groceries",
        completed: false
    },
    {
        id: uuidv4(),
        task: "Go to Gym",
        completed: false
    },
    {
        id: uuidv4(),
        task: "Learn React",
        completed: false
    },
    {
        id: uuidv4(),
        task: "Watch Movies",
        completed: false
    },
    {
        id: uuidv4(),
        task: "New Todo",
        completed: false
    }
];

function addTodo(todo) {
    todos.push(todo);
}

function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id != id);
}

function markCompleted(id) {
    todos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
}

function render() {
    while (list.firstChild) {
        list.firstChild.remove();
    }
    for (let todo of todos) {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" ${todo.completed ? 'checked' : ''}> 
        ${todo.task} <i class="bi bi-trash"></i>`;
        li.setAttribute('data-id', todo.id);
        list.append(li);
    }
}

render();

list.addEventListener('click', function (e) {
    // Delete todo functionality
    if (e.target.nodeName === 'I') {
        const li = e.target.parentElement;
        const todoId = li.getAttribute('data-id');
        deleteTodo(todoId);
        render();
    }
})

list.addEventListener('change', function (e) {
    if (e.target.nodeName === "INPUT") {
        const li = e.target.parentElement;
        const todoId = li.getAttribute('data-id');
        markCompleted(todoId);
        render();
    }
})

addBtn.addEventListener('click', function () {
    const inpTask = todoInp.value;
    addTodo({ id: uuidv4(), task: inpTask, completed: false });
    render();
    todoInp.value = "";
})
