const form = document.querySelector('form');
const textMessageInp = document.querySelector('#text-message');
const list = document.querySelector('.list-group');
const loginSection = document.querySelector('#login-section');
const chatSection = document.querySelector('#chat-section');
const loginBtn = document.querySelector('#login-btn');
const usernameInp = document.querySelector('#username-inp');

chatSection.classList.add('hide');

const socket = io();

socket.on('connection-open', (data) => {
    console.log(data);
});

socket.on('received-msg', (data) => {
    const { message, username } = data;
    const li = document.createElement('li');
    li.classList.add("list-group-item", "fs-4", "mb-3", "p-2", "rounded-pill", "border-dark", "border", "border-3");
    li.innerText = `${username} .: ${message}`;
    list.append(li);
})

socket.on('loggged-in', (data) => {
    chatSection.classList.remove('hide');
    loginSection.classList.add('hide');
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const textMessage = textMessageInp.value;
    if (textMessage.trim().length == 0) {
        return;
    }
    socket.emit('send-msg', { message: textMessage });
    textMessageInp.value = "";
});

loginBtn.addEventListener('click', () => {
    if (usernameInp.value.trim().length === 0) {
        return;
    }
    socket.emit('user-login', { username: usernameInp.value });
    usernameInp.value = "";
});


