const nameRegex = /^[a-zA-Z\s']+$/;
const ageRegex = /^\d+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{11}$/;
const cardRegex = /^\d{16}$/;

const users = JSON.parse(localStorage.getItem('users')) || defaultUsers;

document.addEventListener('DOMContentLoaded', () => {
    showUsers(users);
});

document.querySelector('.add_btn').addEventListener('click', () => {
    document.querySelector('#form').classList.remove('hidden');
});